export interface accessInfoTypes {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: {
    isAvailable: boolean;
  };
  pdf: {
    isAvailable: boolean;
  };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
}

export interface saleInfoTypes {
  country: string;
  isEbook: boolean;
  saleability: string;
}

export interface searchInfoTypes {
  textSnippet: string;
}

export interface industryIdentifierType {
  identifier: string;
  type: string;
}

export interface volumeInfoTypes {
  categories: string[] | undefined;
  allowAnonLogging: boolean;
  authors: Array<string>;
  canonicalVolumeLink: string;
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  industryIdentifiers: industryIdentifierType[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModels: {
    image: boolean;
    text: boolean;
  };
  subtitle: string;
  title: string;
}

export interface Book {
  accessInfo: accessInfoTypes;
  etag: string;
  id: string;
  kind: string;
  saleInfo: saleInfoTypes;
  searchInfo: searchInfoTypes;
  selfLink: string;
  volumeInfo: volumeInfoTypes;
}
