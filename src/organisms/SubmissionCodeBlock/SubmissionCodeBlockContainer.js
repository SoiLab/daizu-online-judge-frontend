import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CodeBlock from "../../atoms/CodeBlock";

import { submissionsSelectors } from "../../state/ducks/submissions";

function SubmissionCodeBlockContainer(props) {
  const submission = props.submission;
  const sourceCode = submission.source_code;
  const language = submission.language;

  return <CodeBlock language={language}>{sourceCode}</CodeBlock>;
}

SubmissionCodeBlockContainer.propTypes = {
  submission: PropTypes.shape({
    source_code: PropTypes.string,
    language: PropTypes.string,
  }),
};

const mapStateToProps = (state, props) => ({
  submission: submissionsSelectors.getSubmissionById(state, props),
});

export default connect(mapStateToProps)(SubmissionCodeBlockContainer);
