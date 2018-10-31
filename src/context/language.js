import React, { Component } from "react";
const LanguageContext = React.createContext();

// could be imported from our translation.json file
const translations = {
  en: {
    welcome: "Welcome",
    greeting: "Hello !!! Welcome my name is Stan",
    login: "Log In",
    changeLocale: "Change locale to French",
    logout: "Log Out",
    localeIs: "the language is in english"
  },
  fr: {
    welcome: "Bienvenue",
    greeting: "Bonjour !!! je m'appelle Stan",
    login: "Connexion",
    changeLocale: "Passer en Anglais",
    logout: "Deconnexion",
    localeIs: "la langue est en Francais"
  }
};
class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "fr",
      translation: translations["fr"]
    };
  }

  switchLocale = () => {
    this.setState(state => {
      const locale = state.locale === "fr" ? "en" : "fr";
      return {
        locale,
        translation: translations[locale]
      };
    });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          ...this.state,
          switchLocale: this.switchLocale
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const Consumer = LanguageContext.Consumer;
export const Provider = LanguageProvider;
