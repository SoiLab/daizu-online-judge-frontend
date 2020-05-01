import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ContestTemplate from "../templates/Contest";
import { reducer } from "../reducer";
//import axios from "axios";
import { request } from "../requests";
import urljoin from "url-join";
//import { config } from "../config";
import { rankingsOperations, rankingsSelectors } from "../state/ducks/rankings";
import { submissionsOperations, submissionsSelectors } from "../state/ducks/submissions";

const ContestContainer = ({
  rankings,
  rankingsTotal,
  fetchRanking,
  submissions,
  submissionsTotal,
  fetchSubmissions,
}) => {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const { contestId } = useParams(); // url paramから取得
  const endpoint = urljoin("/contests", contestId);

  useEffect(() => {
    fetchRanking(`/contests/${contestId}/ranking`);
    fetchSubmissions(`/contests/${contestId}/submits`);
    request(endpoint, dispatch);
  }, [endpoint, fetchRanking, contestId, fetchSubmissions]);

  console.log("page", submissions);
  return (
    <ContestTemplate
      contestTopContent={state.data.contest_top_content}
      problemLists={state.data.problem_list}
      rankings={rankings}
      rankingsTotal={rankingsTotal}
      fetchRanking={fetchRanking}
      contestId={contestId}
      submissions={submissions}
      submissionsTotal={submissionsTotal}
    />
  );
};

ContestContainer.propTypes = {
  rankings: PropTypes.array,
  rankingsTotal: PropTypes.number,
  fetchRanking: PropTypes.func,
  submissions: PropTypes.array,
  submissionsTotal: PropTypes.number,
  fetchSubmissions: PropTypes.func,
};

const mapStateToProps = state => ({
  rankings: rankingsSelectors.rankingsSelector(state),
  rankingsTotal: rankingsSelectors.rankingTotalSelector(state),
  submissions: submissionsSelectors.submissionsSelector(state),
  submissionsTotal: submissionsSelectors.submissionsTotalSelector(state),
});

const mapDispatchToProps = {
  fetchRanking: rankingsOperations,
  fetchSubmissions: submissionsOperations,
};

const Contest = connect(mapStateToProps, mapDispatchToProps)(ContestContainer);

export default Contest;
