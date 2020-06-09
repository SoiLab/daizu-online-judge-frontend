import React, { useEffect } from "react";
import PropTypes from "prop-types";

import CodeSubmit from "../../molecules/CodeSubmit";

function CodeSubmitComponent(props) {
  const languageDict = props.languageDict || {};
  const languageLists = props.languages || [];
  const isFetched = props.isFetched || false;
  const submit = props.submit;
  const fetchLanguages = props.fetchLanguages;

  useEffect(() => {
    if (!isFetched) {
      fetchLanguages("/languages");
    }
  }, [isFetched, fetchLanguages]);

  return <CodeSubmit languageLists={languageLists} languageDict={languageDict} submit={submit} />;
}

CodeSubmitComponent.propTypes = {
  languages: PropTypes.array,
  languageDict: PropTypes.object,
  isFetched: PropTypes.bool,
  submit: PropTypes.func,
  fetchLanguages: PropTypes.func,
};

export default CodeSubmitComponent;
