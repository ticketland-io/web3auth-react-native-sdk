import type { BaseLogoutParams, BaseRedirectParams, LoginParams, OpenLoginOptions } from "@toruslabs/openlogin";

type SdkSpecificInitParams = {
  sdkUrl?: string;
};

export type SdkInitParams = Omit<
  OpenLoginOptions & SdkSpecificInitParams,
  "no3PC" | "uxMode" | "replaceUrlOnRedirect" | "originData" | "_iframeUrl" | "_startUrl" | "_popupUrl" | "_storageServerUrl"
>;

export type SdkLoginParams = Omit<LoginParams, "fastLogin" | "skipTKey" | "getWalletKey"> & Required<Pick<LoginParams, "loginProvider">>;

export type SdkLogoutParams = Partial<BaseLogoutParams> & Partial<BaseRedirectParams>;

export const OPENLOGIN_NETWORK = {
  MAINNET: "mainnet",
  TESTNET: "testnet",
  CYAN: "cyan",
  AQUA: "aqua",
  CELESTE: "celeste",
} as const;

export const SUPPORTED_KEY_CURVES = {
  SECP256K1: "secp256k1",
  ED25519: "ed25519",
};

export const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  REDDIT: "reddit",
  DISCORD: "discord",
  TWITCH: "twitch",
  APPLE: "apple",
  LINE: "line",
  GITHUB: "github",
  KAKAO: "kakao",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  WEIBO: "weibo",
  WECHAT: "wechat",
  EMAIL_PASSWORDLESS: "email_passwordless",
  SMS_PASSWORDLESS: "sms_passwordless",
  JWT: "jwt",
} as const;

export const MFA_LEVELS = {
  DEFAULT: "default",
  OPTIONAL: "optional",
  MANDATORY: "mandatory",
  NONE: "none",
};

export type {
  ALLOWED_INTERACTIONS_TYPE,
  LOGIN_PROVIDER_TYPE,
  OPENLOGIN_NETWORK_TYPE,
  SUPPORTED_KEY_CURVES_TYPE,
  MfaLevelType,
  LoginParams,
  OpenloginUserInfo,
} from "@toruslabs/openlogin";
export type { ExtraLoginOptions } from "@toruslabs/openlogin-utils";
export type { WhiteLabelData, TypeOfLogin } from "@toruslabs/openlogin-jrpc";
