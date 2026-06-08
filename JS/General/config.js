const REPOSITORY_NAME = "/DIGA3008A-Website";

export const BASE_PATH =
    window.location.pathname.startsWith(REPOSITORY_NAME)
        ? REPOSITORY_NAME
        : "";
