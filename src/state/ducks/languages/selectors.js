import { createSelector } from "reselect";

const languagesSelector = state => state.languagesState.languages.data || [];

const languageListSelector = createSelector(languagesSelector, languages => Object.keys(languages));

const languageDictSelector = createSelector(languagesSelector, languages => languages);

const isfetched = createSelector(languagesSelector, languages => languages[0] !== void 0);

export default {
  languageListSelector,
  languageDictSelector,
  isfetched,
};
