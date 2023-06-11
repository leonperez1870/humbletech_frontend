export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteGraphqlTypegen = {
  typesOutputPath?: Maybe<Scalars['String']>;
  documentSearchPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  generateOnBuild?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  gatsbyImageData?: Maybe<Scalars['GatsbyImageData']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  url?: Maybe<Scalars['String']>;
  placeholderUrl?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filesize?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulArticle = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  internalName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ContentfulComponentText>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulArticleSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulArticleCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulArticleUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulArticleSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulArticleSysContentType>;
};

export type ContentfulArticleSysContentType = {
  sys?: Maybe<ContentfulArticleSysContentTypeSys>;
};

export type ContentfulArticleSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentText = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<ContentfulComponentTextText>;
  article?: Maybe<Array<Maybe<ContentfulArticle>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentTextSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentTextCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentTextUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentTextText = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulComponentTextSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentTextSysContentType>;
};

export type ContentfulComponentTextSysContentType = {
  sys?: Maybe<ContentfulComponentTextSysContentTypeSys>;
};

export type ContentfulComponentTextSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPages = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ContentfulContactUsSectionContentfulFaqSectionContentfulHeroContentfulImageWithTextUnion>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPagesSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulPagesCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulPagesUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulContactUsSectionContentfulFaqSectionContentfulHeroContentfulImageWithTextUnion = ContentfulContactUsSection | ContentfulFaqSection | ContentfulHero | ContentfulImageWithText;

export type ContentfulPagesSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPagesSysContentType>;
};

export type ContentfulPagesSysContentType = {
  sys?: Maybe<ContentfulPagesSysContentTypeSys>;
};

export type ContentfulPagesSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHero = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  heading?: Maybe<Scalars['String']>;
  subHeading?: Maybe<Scalars['String']>;
  backgroundImageDesktop?: Maybe<ContentfulAsset>;
  backgroundImageMobile?: Maybe<ContentfulAsset>;
  pages?: Maybe<Array<Maybe<ContentfulPages>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHeroSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHeroCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulHeroUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulHeroSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHeroSysContentType>;
};

export type ContentfulHeroSysContentType = {
  sys?: Maybe<ContentfulHeroSysContentTypeSys>;
};

export type ContentfulHeroSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulImageWithText = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sectionHeading?: Maybe<Scalars['String']>;
  sectionSubHeading?: Maybe<Scalars['String']>;
  imageOnRight?: Maybe<Scalars['Boolean']>;
  sectionImage?: Maybe<ContentfulAsset>;
  pages?: Maybe<Array<Maybe<ContentfulPages>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulImageWithTextSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulImageWithTextCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulImageWithTextUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulImageWithTextSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulImageWithTextSysContentType>;
};

export type ContentfulImageWithTextSysContentType = {
  sys?: Maybe<ContentfulImageWithTextSysContentTypeSys>;
};

export type ContentfulImageWithTextSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFaqSection = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  faqItems?: Maybe<Array<Maybe<ContentfulFaqItem>>>;
  pages?: Maybe<Array<Maybe<ContentfulPages>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFaqSectionSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFaqSectionCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulFaqSectionUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulFaqSectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFaqSectionSysContentType>;
};

export type ContentfulFaqSectionSysContentType = {
  sys?: Maybe<ContentfulFaqSectionSysContentTypeSys>;
};

export type ContentfulFaqSectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFaqItem = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  question?: Maybe<Scalars['String']>;
  faq_section?: Maybe<Array<Maybe<ContentfulFaqSection>>>;
  answer?: Maybe<ContentfulFaqItemAnswerTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFaqItemSys>;
  /** Returns all children nodes filtered by type contentfulFaqItemAnswerTextNode */
  childrenContentfulFaqItemAnswerTextNode?: Maybe<Array<Maybe<ContentfulFaqItemAnswerTextNode>>>;
  /** Returns the first child node of type contentfulFaqItemAnswerTextNode or null if there are no children of given type on this node */
  childContentfulFaqItemAnswerTextNode?: Maybe<ContentfulFaqItemAnswerTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFaqItemCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulFaqItemUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulFaqItemSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFaqItemSysContentType>;
};

export type ContentfulFaqItemSysContentType = {
  sys?: Maybe<ContentfulFaqItemSysContentTypeSys>;
};

export type ContentfulFaqItemSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulContactUsSection = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  contactSectionHeading?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<ContentfulPages>>>;
  contactSectionSubHeading?: Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulContactUsSectionSys>;
  /** Returns all children nodes filtered by type contentfulContactUsSectionContactSectionSubHeadingTextNode */
  childrenContentfulContactUsSectionContactSectionSubHeadingTextNode?: Maybe<Array<Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNode>>>;
  /** Returns the first child node of type contentfulContactUsSectionContactSectionSubHeadingTextNode or null if there are no children of given type on this node */
  childContentfulContactUsSectionContactSectionSubHeadingTextNode?: Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulContactUsSectionCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulContactUsSectionUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulContactUsSectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulContactUsSectionSysContentType>;
};

export type ContentfulContactUsSectionSysContentType = {
  sys?: Maybe<ContentfulContactUsSectionSysContentTypeSys>;
};

export type ContentfulContactUsSectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSeoComponent = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  openGraphTitle?: Maybe<Scalars['String']>;
  openGraphDescription?: Maybe<Scalars['String']>;
  openGraphImage?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSeoComponentSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSeoComponentCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulSeoComponentUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulSeoComponentSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSeoComponentSysContentType>;
};

export type ContentfulSeoComponentSysContentType = {
  sys?: Maybe<ContentfulSeoComponentSysContentTypeSys>;
};

export type ContentfulSeoComponentSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ShopifyApp = {
  shopifyId: Scalars['String'];
};

export type ShopifyAppFeedback = {
  app: ShopifyApp;
  link?: Maybe<ShopifyLink>;
  messages: Array<ShopifyUserError>;
};

export type ShopifyCountryCode =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AC'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CA'
  | 'CV'
  | 'BQ'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'CI'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'SZ'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'XK'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'AN'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MK'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'QA'
  | 'CM'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'KR'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'VC'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TA'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'ZZ';

export type ShopifyCurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'CAD'
  | 'AFN'
  | 'ALL'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'BBD'
  | 'AZN'
  | 'BDT'
  | 'BSD'
  | 'BHD'
  | 'BIF'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BAM'
  | 'BRL'
  | 'BOB'
  | 'BWP'
  | 'BND'
  | 'BGN'
  | 'MMK'
  | 'KHR'
  | 'CVE'
  | 'KYD'
  | 'XAF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CZK'
  | 'DKK'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'ETB'
  | 'XPF'
  | 'FJD'
  | 'GMD'
  | 'GHS'
  | 'GTQ'
  | 'GYD'
  | 'GEL'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'ILS'
  | 'IQD'
  | 'JMD'
  | 'JPY'
  | 'JEP'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LTL'
  | 'MGA'
  | 'MKD'
  | 'MOP'
  | 'MWK'
  | 'MVR'
  | 'MXN'
  | 'MYR'
  | 'MUR'
  | 'MDL'
  | 'MAD'
  | 'MNT'
  | 'MZN'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'NZD'
  | 'NIO'
  | 'NGN'
  | 'NOK'
  | 'OMR'
  | 'PAB'
  | 'PKR'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'WST'
  | 'SAR'
  | 'STD'
  | 'RSD'
  | 'SCR'
  | 'SGD'
  | 'SDG'
  | 'SYP'
  | 'ZAR'
  | 'KRW'
  | 'SSP'
  | 'SBD'
  | 'LKR'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'TWD'
  | 'THB'
  | 'TZS'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VND'
  | 'XOF'
  | 'YER'
  | 'ZMW'
  | 'BYN'
  | 'BYR'
  | 'DJF'
  | 'ERN'
  | 'FKP'
  | 'GIP'
  | 'GNF'
  | 'IRR'
  | 'KID'
  | 'LYD'
  | 'MRU'
  | 'SLL'
  | 'SHP'
  | 'SOS'
  | 'TJS'
  | 'TOP'
  | 'VEF'
  | 'VES'
  | 'XXX';

export type ShopifyEditableProperty = {
  locked: Scalars['Boolean'];
  reason?: Maybe<Scalars['String']>;
};

export type ShopifyFileError = {
  code: ShopifyFileErrorCode;
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type ShopifyFileErrorCode =
  | 'UNKNOWN'
  | 'INVALID_SIGNED_URL'
  | 'IMAGE_DOWNLOAD_FAILURE'
  | 'IMAGE_PROCESSING_FAILURE'
  | 'MEDIA_TIMEOUT_ERROR'
  | 'EXTERNAL_VIDEO_NOT_FOUND'
  | 'EXTERNAL_VIDEO_UNLISTED'
  | 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO'
  | 'EXTERNAL_VIDEO_EMBED_DISABLED'
  | 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING'
  | 'GENERIC_FILE_DOWNLOAD_FAILURE'
  | 'GENERIC_FILE_INVALID_SIZE'
  | 'VIDEO_METADATA_READ_ERROR'
  | 'VIDEO_INVALID_FILETYPE_ERROR'
  | 'VIDEO_MIN_WIDTH_ERROR'
  | 'VIDEO_MAX_WIDTH_ERROR'
  | 'VIDEO_MIN_HEIGHT_ERROR'
  | 'VIDEO_MAX_HEIGHT_ERROR'
  | 'VIDEO_MIN_DURATION_ERROR'
  | 'VIDEO_MAX_DURATION_ERROR'
  | 'VIDEO_VALIDATION_ERROR'
  | 'MODEL3D_VALIDATION_ERROR'
  | 'MODEL3D_THUMBNAIL_GENERATION_ERROR'
  | 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR'
  | 'MODEL3D_GLB_OUTPUT_CREATION_ERROR'
  | 'UNSUPPORTED_IMAGE_FILE_TYPE'
  | 'INVALID_IMAGE_FILE_SIZE'
  | 'INVALID_IMAGE_ASPECT_RATIO'
  | 'INVALID_IMAGE_RESOLUTION'
  | 'FILE_STORAGE_LIMIT_EXCEEDED';

export type ShopifyFileStatus =
  | 'UPLOADED'
  | 'PROCESSING'
  | 'READY'
  | 'FAILED';

export type ShopifyImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  originalSrc: Scalars['String'];
  src: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
};


export type ShopifyImageGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type ShopifyLink = {
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ShopifyMoneyV2 = {
  amount: Scalars['Float'];
  currencyCode: ShopifyCurrencyCode;
};

export type ShopifyResourceFeedback = {
  details: Array<ShopifyAppFeedback>;
  summary: Scalars['String'];
};

export type ShopifySeo = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ShopifyUserError = {
  field?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

export type ShopifyWeightUnit =
  | 'KILOGRAMS'
  | 'GRAMS'
  | 'POUNDS'
  | 'OUNCES';

export type ShopifyExternalVideo = Node & ShopifyMedia & {
  alt?: Maybe<Scalars['String']>;
  embeddedUrl: Scalars['String'];
  host: ShopifyMediaHost;
  id: Scalars['ID'];
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyMedia = {
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyMediaContentType =
  | 'VIDEO'
  | 'EXTERNAL_VIDEO'
  | 'MODEL_3D'
  | 'IMAGE';

export type ShopifyMediaError = {
  code: ShopifyMediaErrorCode;
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type ShopifyMediaErrorCode =
  | 'UNKNOWN'
  | 'INVALID_SIGNED_URL'
  | 'IMAGE_DOWNLOAD_FAILURE'
  | 'IMAGE_PROCESSING_FAILURE'
  | 'MEDIA_TIMEOUT_ERROR'
  | 'EXTERNAL_VIDEO_NOT_FOUND'
  | 'EXTERNAL_VIDEO_UNLISTED'
  | 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO'
  | 'EXTERNAL_VIDEO_EMBED_DISABLED'
  | 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING'
  | 'GENERIC_FILE_DOWNLOAD_FAILURE'
  | 'GENERIC_FILE_INVALID_SIZE'
  | 'VIDEO_METADATA_READ_ERROR'
  | 'VIDEO_INVALID_FILETYPE_ERROR'
  | 'VIDEO_MIN_WIDTH_ERROR'
  | 'VIDEO_MAX_WIDTH_ERROR'
  | 'VIDEO_MIN_HEIGHT_ERROR'
  | 'VIDEO_MAX_HEIGHT_ERROR'
  | 'VIDEO_MIN_DURATION_ERROR'
  | 'VIDEO_MAX_DURATION_ERROR'
  | 'VIDEO_VALIDATION_ERROR'
  | 'MODEL3D_VALIDATION_ERROR'
  | 'MODEL3D_THUMBNAIL_GENERATION_ERROR'
  | 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR'
  | 'MODEL3D_GLB_OUTPUT_CREATION_ERROR'
  | 'UNSUPPORTED_IMAGE_FILE_TYPE'
  | 'INVALID_IMAGE_FILE_SIZE'
  | 'INVALID_IMAGE_ASPECT_RATIO'
  | 'INVALID_IMAGE_RESOLUTION'
  | 'FILE_STORAGE_LIMIT_EXCEEDED';

export type ShopifyMediaHost =
  | 'YOUTUBE'
  | 'VIMEO';

export type ShopifyMediaImage = Node & ShopifyMedia & {
  alt?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  fileErrors: Array<ShopifyFileError>;
  fileStatus: ShopifyFileStatus;
  id: Scalars['ID'];
  image?: Maybe<ShopifyImage>;
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  mimeType?: Maybe<Scalars['String']>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyMediaImageCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyMediaPreviewImage = {
  image?: Maybe<ShopifyImage>;
  status: ShopifyMediaPreviewImageStatus;
};

export type ShopifyMediaPreviewImageStatus =
  | 'UPLOADED'
  | 'PROCESSING'
  | 'READY'
  | 'FAILED';

export type ShopifyMediaStatus =
  | 'UPLOADED'
  | 'PROCESSING'
  | 'READY'
  | 'FAILED';

export type ShopifyModel3d = Node & ShopifyMedia & {
  alt?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  id: Scalars['ID'];
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  originalSource?: Maybe<ShopifyModel3dSource>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  sources: Array<ShopifyModel3dSource>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyModel3dSource = {
  filesize: Scalars['Int'];
  format: Scalars['String'];
  mimeType: Scalars['String'];
  url: Scalars['String'];
};

export type ShopifyVideo = Node & ShopifyMedia & {
  alt?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  id: Scalars['ID'];
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  originalSource?: Maybe<ShopifyVideoSource>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  sources: Array<ShopifyVideoSource>;
  status: ShopifyMediaStatus;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyVideoSource = {
  format: Scalars['String'];
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type ShopifyMetafield = Node & {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  legacyResourceId: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: ShopifyMetafieldOwnerType;
  shopifyId: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  /** @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07. */
  valueType: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyMetafieldCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyMetafieldUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyMetafieldOwnerType =
  | 'ARTICLE'
  | 'BLOG'
  | 'COLLECTION'
  | 'CUSTOMER'
  | 'DRAFTORDER'
  | 'ORDER'
  | 'PAGE'
  | 'PRODUCT'
  | 'PRODUCTIMAGE'
  | 'PRODUCTVARIANT'
  | 'SHOP';

export type ShopifyProduct = Node & {
  _featuredMedia: Scalars['String'];
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  descriptionHtml: Scalars['String'];
  featuredImage?: Maybe<ShopifyImage>;
  featuredMedia?: Maybe<ShopifyMedia>;
  feedback?: Maybe<ShopifyResourceFeedback>;
  giftCardTemplateSuffix?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  hasOnlyDefaultVariant: Scalars['Boolean'];
  hasOutOfStockVariants: Scalars['Boolean'];
  id: Scalars['ID'];
  isGiftCard: Scalars['Boolean'];
  legacyResourceId: Scalars['String'];
  media: Array<ShopifyMedia>;
  mediaCount: Scalars['Int'];
  metafield?: Maybe<ShopifyMetafield>;
  metafields: Array<ShopifyMetafield>;
  onlineStorePreviewUrl?: Maybe<Scalars['String']>;
  onlineStoreUrl?: Maybe<Scalars['String']>;
  options: Array<ShopifyProductOption>;
  /** @deprecated Deprecated in API version 2020-10. Use `priceRangeV2` instead. */
  priceRange: ShopifyProductPriceRange;
  priceRangeV2: ShopifyProductPriceRangeV2;
  productType: Scalars['String'];
  publishedAt?: Maybe<Scalars['Date']>;
  requiresSellingPlan: Scalars['Boolean'];
  sellingPlanGroupCount: Scalars['Int'];
  seo: ShopifySeo;
  shopifyId: Scalars['String'];
  status: ShopifyProductStatus;
  storefrontId: Scalars['String'];
  tags: Array<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  totalInventory: Scalars['Int'];
  totalVariants: Scalars['Int'];
  tracksInventory: Scalars['Boolean'];
  updatedAt: Scalars['Date'];
  variants: Array<ShopifyProductVariant>;
  vendor: Scalars['String'];
  collections: Array<ShopifyCollection>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyProductCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


export type ShopifyProductPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductOption = {
  name: Scalars['String'];
  position: Scalars['Int'];
  shopifyId: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type ShopifyProductPriceRange = {
  maxVariantPrice: ShopifyMoneyV2;
  minVariantPrice: ShopifyMoneyV2;
};

export type ShopifyProductPriceRangeV2 = {
  maxVariantPrice: ShopifyMoneyV2;
  minVariantPrice: ShopifyMoneyV2;
};

export type ShopifyProductStatus =
  | 'ACTIVE'
  | 'ARCHIVED'
  | 'DRAFT';

export type ShopifyProductVariant = Node & {
  _product: Scalars['String'];
  availableForSale: Scalars['Boolean'];
  barcode?: Maybe<Scalars['String']>;
  compareAtPrice?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Date'];
  displayName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ShopifyImage>;
  inventoryPolicy: ShopifyProductVariantInventoryPolicy;
  inventoryQuantity?: Maybe<Scalars['Int']>;
  legacyResourceId: Scalars['String'];
  media: Array<ShopifyMedia>;
  metafield?: Maybe<ShopifyMetafield>;
  metafields: Array<ShopifyMetafield>;
  position: Scalars['Int'];
  presentmentPrices: Array<ShopifyProductVariantPricePair>;
  price: Scalars['Float'];
  product: ShopifyProduct;
  /** @deprecated Use `InventoryItem.requiresShipping` instead. */
  requiresShipping: Scalars['Boolean'];
  selectedOptions: Array<ShopifySelectedOption>;
  sellingPlanGroupCount: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  shopifyId: Scalars['String'];
  storefrontId: Scalars['String'];
  taxCode?: Maybe<Scalars['String']>;
  taxable: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
  weight?: Maybe<Scalars['Float']>;
  weightUnit: ShopifyWeightUnit;
  inventoryItem: ShopifyInventoryItem;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyProductVariantCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductVariantMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


export type ShopifyProductVariantUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductVariantInventoryPolicy =
  | 'DENY'
  | 'CONTINUE';

export type ShopifyProductVariantPricePair = {
  compareAtPrice?: Maybe<ShopifyMoneyV2>;
  price: ShopifyMoneyV2;
};

export type ShopifySelectedOption = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ShopifyCollection = Node & {
  description: Scalars['String'];
  descriptionHtml: Scalars['String'];
  feedback?: Maybe<ShopifyResourceFeedback>;
  handle: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ShopifyImage>;
  legacyResourceId: Scalars['String'];
  metafield?: Maybe<ShopifyMetafield>;
  metafields: Array<ShopifyMetafield>;
  products: Array<ShopifyProduct>;
  productsCount: Scalars['Int'];
  ruleSet?: Maybe<ShopifyCollectionRuleSet>;
  seo: ShopifySeo;
  shopifyId: Scalars['String'];
  sortOrder: ShopifyCollectionSortOrder;
  storefrontId: Scalars['String'];
  templateSuffix?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyCollectionMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


export type ShopifyCollectionUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyCollectionRule = {
  column: ShopifyCollectionRuleColumn;
  condition: Scalars['String'];
  relation: ShopifyCollectionRuleRelation;
};

export type ShopifyCollectionRuleColumn =
  | 'TAG'
  | 'TITLE'
  | 'TYPE'
  | 'VENDOR'
  | 'VARIANT_PRICE'
  | 'IS_PRICE_REDUCED'
  | 'VARIANT_COMPARE_AT_PRICE'
  | 'VARIANT_WEIGHT'
  | 'VARIANT_INVENTORY'
  | 'VARIANT_TITLE';

export type ShopifyCollectionRuleRelation =
  | 'CONTAINS'
  | 'ENDS_WITH'
  | 'EQUALS'
  | 'GREATER_THAN'
  | 'IS_NOT_SET'
  | 'IS_SET'
  | 'LESS_THAN'
  | 'NOT_CONTAINS'
  | 'NOT_EQUALS'
  | 'STARTS_WITH';

export type ShopifyCollectionRuleSet = {
  appliedDisjunctively: Scalars['Boolean'];
  rules: Array<ShopifyCollectionRule>;
};

export type ShopifyCollectionSortOrder =
  | 'ALPHA_ASC'
  | 'ALPHA_DESC'
  | 'BEST_SELLING'
  | 'CREATED'
  | 'CREATED_DESC'
  | 'MANUAL'
  | 'PRICE_ASC'
  | 'PRICE_DESC';

export type ShopifyFulfillmentService = {
  callbackUrl?: Maybe<Scalars['String']>;
  fulfillmentOrdersOptIn: Scalars['Boolean'];
  handle: Scalars['String'];
  inventoryManagement: Scalars['Boolean'];
  productBased: Scalars['Boolean'];
  serviceName: Scalars['String'];
  shippingMethods: Array<ShopifyShippingMethod>;
  shopifyId: Scalars['String'];
  type: ShopifyFulfillmentServiceType;
};

export type ShopifyFulfillmentServiceType =
  | 'GIFT_CARD'
  | 'MANUAL'
  | 'THIRD_PARTY';

export type ShopifyInventoryItem = {
  countryCodeOfOrigin?: Maybe<ShopifyCountryCode>;
  createdAt: Scalars['Date'];
  duplicateSkuCount: Scalars['Int'];
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  inventoryHistoryUrl?: Maybe<Scalars['String']>;
  inventoryLevels: Array<ShopifyInventoryLevel>;
  legacyResourceId: Scalars['String'];
  locationsCount: Scalars['Int'];
  provinceCodeOfOrigin?: Maybe<Scalars['String']>;
  requiresShipping: Scalars['Boolean'];
  shopifyId: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  tracked: Scalars['Boolean'];
  trackedEditable: ShopifyEditableProperty;
  unitCost?: Maybe<ShopifyMoneyV2>;
  updatedAt: Scalars['Date'];
  variant: ShopifyProductVariantConnection;
};


export type ShopifyInventoryItemCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyInventoryItemUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductVariantConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantGroupConnection>;
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionMaxArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionMinArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionSumArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldSelector;
};

export type ShopifyProductVariantEdge = {
  next?: Maybe<ShopifyProductVariant>;
  node: ShopifyProductVariant;
  previous?: Maybe<ShopifyProductVariant>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type ShopifyProductVariantFieldSelector = {
  _product?: InputMaybe<FieldSelectorEnum>;
  availableForSale?: InputMaybe<FieldSelectorEnum>;
  barcode?: InputMaybe<FieldSelectorEnum>;
  compareAtPrice?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  displayName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ShopifyImageFieldSelector>;
  inventoryPolicy?: InputMaybe<FieldSelectorEnum>;
  inventoryQuantity?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  media?: InputMaybe<ShopifyMediaFieldSelector>;
  metafield?: InputMaybe<ShopifyMetafieldFieldSelector>;
  metafields?: InputMaybe<ShopifyMetafieldFieldSelector>;
  position?: InputMaybe<FieldSelectorEnum>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairFieldSelector>;
  price?: InputMaybe<FieldSelectorEnum>;
  product?: InputMaybe<ShopifyProductFieldSelector>;
  requiresShipping?: InputMaybe<FieldSelectorEnum>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionFieldSelector>;
  sellingPlanGroupCount?: InputMaybe<FieldSelectorEnum>;
  sku?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  storefrontId?: InputMaybe<FieldSelectorEnum>;
  taxCode?: InputMaybe<FieldSelectorEnum>;
  taxable?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  weight?: InputMaybe<FieldSelectorEnum>;
  weightUnit?: InputMaybe<FieldSelectorEnum>;
  inventoryItem?: InputMaybe<ShopifyInventoryItemFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type FieldSelectorEnum =
  | 'SELECT';

export type ShopifyImageFieldSelector = {
  altText?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  originalSrc?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  transformedSrc?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyMediaErrorFieldSelector = {
  code?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaPreviewImageFieldSelector = {
  image?: InputMaybe<ShopifyImageFieldSelector>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMetafieldFieldSelector = {
  createdAt?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  key?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  namespace?: InputMaybe<FieldSelectorEnum>;
  ownerType?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
  valueType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyProductVariantPricePairFieldSelector = {
  compareAtPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  price?: InputMaybe<ShopifyMoneyV2FieldSelector>;
};

export type ShopifyMoneyV2FieldSelector = {
  amount?: InputMaybe<FieldSelectorEnum>;
  currencyCode?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductFieldSelector = {
  _featuredMedia?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  descriptionHtml?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<ShopifyImageFieldSelector>;
  featuredMedia?: InputMaybe<ShopifyMediaFieldSelector>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFieldSelector>;
  giftCardTemplateSuffix?: InputMaybe<FieldSelectorEnum>;
  handle?: InputMaybe<FieldSelectorEnum>;
  hasOnlyDefaultVariant?: InputMaybe<FieldSelectorEnum>;
  hasOutOfStockVariants?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  isGiftCard?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  media?: InputMaybe<ShopifyMediaFieldSelector>;
  mediaCount?: InputMaybe<FieldSelectorEnum>;
  metafield?: InputMaybe<ShopifyMetafieldFieldSelector>;
  metafields?: InputMaybe<ShopifyMetafieldFieldSelector>;
  onlineStorePreviewUrl?: InputMaybe<FieldSelectorEnum>;
  onlineStoreUrl?: InputMaybe<FieldSelectorEnum>;
  options?: InputMaybe<ShopifyProductOptionFieldSelector>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeFieldSelector>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FieldSelector>;
  productType?: InputMaybe<FieldSelectorEnum>;
  publishedAt?: InputMaybe<FieldSelectorEnum>;
  requiresSellingPlan?: InputMaybe<FieldSelectorEnum>;
  sellingPlanGroupCount?: InputMaybe<FieldSelectorEnum>;
  seo?: InputMaybe<ShopifySeoFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  storefrontId?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  templateSuffix?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  totalInventory?: InputMaybe<FieldSelectorEnum>;
  totalVariants?: InputMaybe<FieldSelectorEnum>;
  tracksInventory?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  variants?: InputMaybe<ShopifyProductVariantFieldSelector>;
  vendor?: InputMaybe<FieldSelectorEnum>;
  collections?: InputMaybe<ShopifyCollectionFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyResourceFeedbackFieldSelector = {
  details?: InputMaybe<ShopifyAppFeedbackFieldSelector>;
  summary?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyAppFeedbackFieldSelector = {
  app?: InputMaybe<ShopifyAppFieldSelector>;
  link?: InputMaybe<ShopifyLinkFieldSelector>;
  messages?: InputMaybe<ShopifyUserErrorFieldSelector>;
};

export type ShopifyAppFieldSelector = {
  shopifyId?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyLinkFieldSelector = {
  label?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyUserErrorFieldSelector = {
  field?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductOptionFieldSelector = {
  name?: InputMaybe<FieldSelectorEnum>;
  position?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  values?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductPriceRangeFieldSelector = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
};

export type ShopifyProductPriceRangeV2FieldSelector = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
};

export type ShopifySeoFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyCollectionFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  descriptionHtml?: InputMaybe<FieldSelectorEnum>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFieldSelector>;
  handle?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ShopifyImageFieldSelector>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  metafield?: InputMaybe<ShopifyMetafieldFieldSelector>;
  metafields?: InputMaybe<ShopifyMetafieldFieldSelector>;
  products?: InputMaybe<ShopifyProductFieldSelector>;
  productsCount?: InputMaybe<FieldSelectorEnum>;
  ruleSet?: InputMaybe<ShopifyCollectionRuleSetFieldSelector>;
  seo?: InputMaybe<ShopifySeoFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  sortOrder?: InputMaybe<FieldSelectorEnum>;
  storefrontId?: InputMaybe<FieldSelectorEnum>;
  templateSuffix?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyCollectionRuleSetFieldSelector = {
  appliedDisjunctively?: InputMaybe<FieldSelectorEnum>;
  rules?: InputMaybe<ShopifyCollectionRuleFieldSelector>;
};

export type ShopifyCollectionRuleFieldSelector = {
  column?: InputMaybe<FieldSelectorEnum>;
  condition?: InputMaybe<FieldSelectorEnum>;
  relation?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifySelectedOptionFieldSelector = {
  name?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyInventoryItemFieldSelector = {
  countryCodeOfOrigin?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  duplicateSkuCount?: InputMaybe<FieldSelectorEnum>;
  harmonizedSystemCode?: InputMaybe<FieldSelectorEnum>;
  inventoryHistoryUrl?: InputMaybe<FieldSelectorEnum>;
  inventoryLevels?: InputMaybe<ShopifyInventoryLevelFieldSelector>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  locationsCount?: InputMaybe<FieldSelectorEnum>;
  provinceCodeOfOrigin?: InputMaybe<FieldSelectorEnum>;
  requiresShipping?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  sku?: InputMaybe<FieldSelectorEnum>;
  tracked?: InputMaybe<FieldSelectorEnum>;
  trackedEditable?: InputMaybe<ShopifyEditablePropertyFieldSelector>;
  unitCost?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyInventoryLevelFieldSelector = {
  _location?: InputMaybe<FieldSelectorEnum>;
  available?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  location?: InputMaybe<ShopifyLocationFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyLocationFieldSelector = {
  activatable?: InputMaybe<FieldSelectorEnum>;
  address?: InputMaybe<ShopifyLocationAddressFieldSelector>;
  addressVerified?: InputMaybe<FieldSelectorEnum>;
  deactivatable?: InputMaybe<FieldSelectorEnum>;
  deactivatedAt?: InputMaybe<FieldSelectorEnum>;
  deletable?: InputMaybe<FieldSelectorEnum>;
  fulfillmentService?: InputMaybe<ShopifyFulfillmentServiceFieldSelector>;
  fulfillsOnlineOrders?: InputMaybe<FieldSelectorEnum>;
  hasActiveInventory?: InputMaybe<FieldSelectorEnum>;
  hasUnfulfilledOrders?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  isActive?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  shipsInventory?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyLocationAddressFieldSelector = {
  address1?: InputMaybe<FieldSelectorEnum>;
  address2?: InputMaybe<FieldSelectorEnum>;
  city?: InputMaybe<FieldSelectorEnum>;
  country?: InputMaybe<FieldSelectorEnum>;
  countryCode?: InputMaybe<FieldSelectorEnum>;
  formatted?: InputMaybe<FieldSelectorEnum>;
  latitude?: InputMaybe<FieldSelectorEnum>;
  longitude?: InputMaybe<FieldSelectorEnum>;
  phone?: InputMaybe<FieldSelectorEnum>;
  province?: InputMaybe<FieldSelectorEnum>;
  provinceCode?: InputMaybe<FieldSelectorEnum>;
  zip?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyFulfillmentServiceFieldSelector = {
  callbackUrl?: InputMaybe<FieldSelectorEnum>;
  fulfillmentOrdersOptIn?: InputMaybe<FieldSelectorEnum>;
  handle?: InputMaybe<FieldSelectorEnum>;
  inventoryManagement?: InputMaybe<FieldSelectorEnum>;
  productBased?: InputMaybe<FieldSelectorEnum>;
  serviceName?: InputMaybe<FieldSelectorEnum>;
  shippingMethods?: InputMaybe<ShopifyShippingMethodFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyShippingMethodFieldSelector = {
  code?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyEditablePropertyFieldSelector = {
  locked?: InputMaybe<FieldSelectorEnum>;
  reason?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductVariantGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantGroupConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionMaxArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionMinArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionSumArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldSelector;
};

export type ShopifyInventoryLevel = Node & {
  _location: Scalars['String'];
  available: Scalars['Int'];
  id: Scalars['ID'];
  location: ShopifyLocation;
  shopifyId: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyLocation = Node & {
  activatable: Scalars['Boolean'];
  address: ShopifyLocationAddress;
  addressVerified: Scalars['Boolean'];
  deactivatable: Scalars['Boolean'];
  deactivatedAt?: Maybe<Scalars['String']>;
  deletable: Scalars['Boolean'];
  fulfillmentService?: Maybe<ShopifyFulfillmentService>;
  fulfillsOnlineOrders: Scalars['Boolean'];
  hasActiveInventory: Scalars['Boolean'];
  hasUnfulfilledOrders: Scalars['Boolean'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  legacyResourceId: Scalars['String'];
  name: Scalars['String'];
  shipsInventory: Scalars['Boolean'];
  shopifyId: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyLocationAddress = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  formatted: Array<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  provinceCode?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ShopifyShippingMethod = {
  code: Scalars['String'];
  label: Scalars['String'];
};

export type ShopifyLineItem = Node & {
  _product: Scalars['String'];
  id: Scalars['ID'];
  product?: Maybe<ShopifyProduct>;
  shopifyId: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyOrder = Node & {
  closed: Scalars['Boolean'];
  closedAt?: Maybe<Scalars['Date']>;
  edited: Scalars['Boolean'];
  id: Scalars['ID'];
  lineItems: Array<ShopifyLineItem>;
  refunds: Array<ShopifyRefund>;
  shopifyId: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyOrderClosedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyRefund = {
  createdAt?: Maybe<Scalars['Date']>;
  shopifyId: Scalars['String'];
};


export type ShopifyRefundCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ContentfulFaqItemAnswerTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  answer?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulFaqItemAnswerTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulFaqItemAnswerTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contactSectionSubHeading?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulArticle?: Maybe<ContentfulArticle>;
  allContentfulArticle: ContentfulArticleConnection;
  contentfulComponentText?: Maybe<ContentfulComponentText>;
  allContentfulComponentText: ContentfulComponentTextConnection;
  contentfulPages?: Maybe<ContentfulPages>;
  allContentfulPages: ContentfulPagesConnection;
  contentfulHero?: Maybe<ContentfulHero>;
  allContentfulHero: ContentfulHeroConnection;
  contentfulImageWithText?: Maybe<ContentfulImageWithText>;
  allContentfulImageWithText: ContentfulImageWithTextConnection;
  contentfulFaqSection?: Maybe<ContentfulFaqSection>;
  allContentfulFaqSection: ContentfulFaqSectionConnection;
  contentfulFaqItem?: Maybe<ContentfulFaqItem>;
  allContentfulFaqItem: ContentfulFaqItemConnection;
  contentfulContactUsSection?: Maybe<ContentfulContactUsSection>;
  allContentfulContactUsSection: ContentfulContactUsSectionConnection;
  contentfulSeoComponent?: Maybe<ContentfulSeoComponent>;
  allContentfulSeoComponent: ContentfulSeoComponentConnection;
  shopifyExternalVideo?: Maybe<ShopifyExternalVideo>;
  allShopifyExternalVideo: ShopifyExternalVideoConnection;
  shopifyMedia?: Maybe<ShopifyMedia>;
  allShopifyMedia: ShopifyMediaConnection;
  shopifyMediaImage?: Maybe<ShopifyMediaImage>;
  allShopifyMediaImage: ShopifyMediaImageConnection;
  shopifyModel3D?: Maybe<ShopifyModel3d>;
  allShopifyModel3D: ShopifyModel3dConnection;
  shopifyVideo?: Maybe<ShopifyVideo>;
  allShopifyVideo: ShopifyVideoConnection;
  shopifyMetafield?: Maybe<ShopifyMetafield>;
  allShopifyMetafield: ShopifyMetafieldConnection;
  shopifyProduct?: Maybe<ShopifyProduct>;
  allShopifyProduct: ShopifyProductConnection;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  allShopifyProductVariant: ShopifyProductVariantConnection;
  shopifyCollection?: Maybe<ShopifyCollection>;
  allShopifyCollection: ShopifyCollectionConnection;
  shopifyInventoryLevel?: Maybe<ShopifyInventoryLevel>;
  allShopifyInventoryLevel: ShopifyInventoryLevelConnection;
  shopifyLocation?: Maybe<ShopifyLocation>;
  allShopifyLocation: ShopifyLocationConnection;
  shopifyLineItem?: Maybe<ShopifyLineItem>;
  allShopifyLineItem: ShopifyLineItemConnection;
  shopifyOrder?: Maybe<ShopifyOrder>;
  allShopifyOrder: ShopifyOrderConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulFaqItemAnswerTextNode?: Maybe<ContentfulFaqItemAnswerTextNode>;
  allContentfulFaqItemAnswerTextNode: ContentfulFaqItemAnswerTextNodeConnection;
  contentfulContactUsSectionContactSectionSubHeadingTextNode?: Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
  allContentfulContactUsSectionContactSectionSubHeadingTextNode: ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulEntrySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAssetSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulArticleArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<ContentfulComponentTextFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulArticleSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulArticleArgs = {
  filter?: InputMaybe<ContentfulArticleFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulArticleSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentTextArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<ContentfulComponentTextTextFilterInput>;
  article?: InputMaybe<ContentfulArticleFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentTextSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentTextArgs = {
  filter?: InputMaybe<ContentfulComponentTextFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentTextSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulPagesArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPagesSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulPagesArgs = {
  filter?: InputMaybe<ContentfulPagesFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulPagesSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulHeroArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  subHeading?: InputMaybe<StringQueryOperatorInput>;
  backgroundImageDesktop?: InputMaybe<ContentfulAssetFilterInput>;
  backgroundImageMobile?: InputMaybe<ContentfulAssetFilterInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHeroSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulHeroArgs = {
  filter?: InputMaybe<ContentfulHeroFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulHeroSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulImageWithTextArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sectionHeading?: InputMaybe<StringQueryOperatorInput>;
  sectionSubHeading?: InputMaybe<StringQueryOperatorInput>;
  imageOnRight?: InputMaybe<BooleanQueryOperatorInput>;
  sectionImage?: InputMaybe<ContentfulAssetFilterInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImageWithTextSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulImageWithTextArgs = {
  filter?: InputMaybe<ContentfulImageWithTextFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulImageWithTextSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulFaqSectionArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  faqItems?: InputMaybe<ContentfulFaqItemFilterListInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqSectionSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulFaqSectionArgs = {
  filter?: InputMaybe<ContentfulFaqSectionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulFaqSectionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulFaqItemArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  question?: InputMaybe<StringQueryOperatorInput>;
  faq_section?: InputMaybe<ContentfulFaqSectionFilterListInput>;
  answer?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqItemSysFilterInput>;
  childrenContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterListInput>;
  childContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulFaqItemArgs = {
  filter?: InputMaybe<ContentfulFaqItemFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulFaqItemSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContactUsSectionArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  contactSectionHeading?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  contactSectionSubHeading?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContactUsSectionSysFilterInput>;
  childrenContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterListInput>;
  childContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulContactUsSectionArgs = {
  filter?: InputMaybe<ContentfulContactUsSectionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulContactUsSectionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSeoComponentArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  openGraphTitle?: InputMaybe<StringQueryOperatorInput>;
  openGraphDescription?: InputMaybe<StringQueryOperatorInput>;
  openGraphImage?: InputMaybe<ContentfulAssetFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSeoComponentSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulSeoComponentArgs = {
  filter?: InputMaybe<ContentfulSeoComponentFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulSeoComponentSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyExternalVideoArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  embeddedUrl?: InputMaybe<StringQueryOperatorInput>;
  host?: InputMaybe<ShopifyMediaHostQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyExternalVideoArgs = {
  filter?: InputMaybe<ShopifyExternalVideoFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyExternalVideoSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyMediaArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyMediaArgs = {
  filter?: InputMaybe<ShopifyMediaFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyMediaSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyMediaImageArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  fileErrors?: InputMaybe<ShopifyFileErrorFilterListInput>;
  fileStatus?: InputMaybe<ShopifyFileStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyMediaImageArgs = {
  filter?: InputMaybe<ShopifyMediaImageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyMediaImageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyModel3DArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyModel3dSourceFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  sources?: InputMaybe<ShopifyModel3dSourceFilterListInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyModel3DArgs = {
  filter?: InputMaybe<ShopifyModel3dFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyModel3dSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyVideoArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyVideoSourceFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sources?: InputMaybe<ShopifyVideoSourceFilterListInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyVideoArgs = {
  filter?: InputMaybe<ShopifyVideoFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyVideoSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyMetafieldArgs = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<ShopifyMetafieldOwnerTypeQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyMetafieldArgs = {
  filter?: InputMaybe<ShopifyMetafieldFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyMetafieldSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductArgs = {
  _featuredMedia?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<ShopifyImageFilterInput>;
  featuredMedia?: InputMaybe<ShopifyMediaFilterInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFilterInput>;
  giftCardTemplateSuffix?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: InputMaybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isGiftCard?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  mediaCount?: InputMaybe<IntQueryOperatorInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  onlineStorePreviewUrl?: InputMaybe<StringQueryOperatorInput>;
  onlineStoreUrl?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ShopifyProductOptionFilterListInput>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeFilterInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  requiresSellingPlan?: InputMaybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  seo?: InputMaybe<ShopifySeoFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyProductStatusQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  totalInventory?: InputMaybe<IntQueryOperatorInput>;
  totalVariants?: InputMaybe<IntQueryOperatorInput>;
  tracksInventory?: InputMaybe<BooleanQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  variants?: InputMaybe<ShopifyProductVariantFilterListInput>;
  vendor?: InputMaybe<StringQueryOperatorInput>;
  collections?: InputMaybe<ShopifyCollectionFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductArgs = {
  filter?: InputMaybe<ShopifyProductFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyProductSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantArgs = {
  _product?: InputMaybe<StringQueryOperatorInput>;
  availableForSale?: InputMaybe<BooleanQueryOperatorInput>;
  barcode?: InputMaybe<StringQueryOperatorInput>;
  compareAtPrice?: InputMaybe<FloatQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  inventoryPolicy?: InputMaybe<ShopifyProductVariantInventoryPolicyQueryOperatorInput>;
  inventoryQuantity?: InputMaybe<IntQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairFilterListInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  requiresShipping?: InputMaybe<BooleanQueryOperatorInput>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionFilterListInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  taxCode?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  weight?: InputMaybe<FloatQueryOperatorInput>;
  weightUnit?: InputMaybe<ShopifyWeightUnitQueryOperatorInput>;
  inventoryItem?: InputMaybe<ShopifyInventoryItemFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: InputMaybe<ShopifyProductVariantFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyProductVariantSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyCollectionArgs = {
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFilterInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  products?: InputMaybe<ShopifyProductFilterListInput>;
  productsCount?: InputMaybe<IntQueryOperatorInput>;
  ruleSet?: InputMaybe<ShopifyCollectionRuleSetFilterInput>;
  seo?: InputMaybe<ShopifySeoFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sortOrder?: InputMaybe<ShopifyCollectionSortOrderQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyCollectionArgs = {
  filter?: InputMaybe<ShopifyCollectionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyCollectionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyInventoryLevelArgs = {
  _location?: InputMaybe<StringQueryOperatorInput>;
  available?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<ShopifyLocationFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyInventoryLevelArgs = {
  filter?: InputMaybe<ShopifyInventoryLevelFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyInventoryLevelSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyLocationArgs = {
  activatable?: InputMaybe<BooleanQueryOperatorInput>;
  address?: InputMaybe<ShopifyLocationAddressFilterInput>;
  addressVerified?: InputMaybe<BooleanQueryOperatorInput>;
  deactivatable?: InputMaybe<BooleanQueryOperatorInput>;
  deactivatedAt?: InputMaybe<StringQueryOperatorInput>;
  deletable?: InputMaybe<BooleanQueryOperatorInput>;
  fulfillmentService?: InputMaybe<ShopifyFulfillmentServiceFilterInput>;
  fulfillsOnlineOrders?: InputMaybe<BooleanQueryOperatorInput>;
  hasActiveInventory?: InputMaybe<BooleanQueryOperatorInput>;
  hasUnfulfilledOrders?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  shipsInventory?: InputMaybe<BooleanQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyLocationArgs = {
  filter?: InputMaybe<ShopifyLocationFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyLocationSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyLineItemArgs = {
  _product?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyLineItemArgs = {
  filter?: InputMaybe<ShopifyLineItemFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyLineItemSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyOrderArgs = {
  closed?: InputMaybe<BooleanQueryOperatorInput>;
  closedAt?: InputMaybe<DateQueryOperatorInput>;
  edited?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  lineItems?: InputMaybe<ShopifyLineItemFilterListInput>;
  refunds?: InputMaybe<ShopifyRefundFilterListInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyOrderArgs = {
  filter?: InputMaybe<ShopifyOrderFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyOrderSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<MarkdownRemarkSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulFaqItemAnswerTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  answer?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqItemAnswerTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulFaqItemAnswerTextNodeArgs = {
  filter?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulFaqItemAnswerTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContactUsSectionContactSectionSubHeadingTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  contactSectionSubHeading?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulContactUsSectionContactSectionSubHeadingTextNodeArgs = {
  filter?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulContentTypeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteGraphqlTypegenFilterInput = {
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
  documentSearchPaths?: InputMaybe<StringQueryOperatorInput>;
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  port?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGraphqlTypegenFieldSelector = {
  typesOutputPath?: InputMaybe<FieldSelectorEnum>;
  documentSearchPaths?: InputMaybe<FieldSelectorEnum>;
  generateOnBuild?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  port?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenSortInput>;
  polyfill?: InputMaybe<SortOrderEnum>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
};

export type SiteGraphqlTypegenSortInput = {
  typesOutputPath?: InputMaybe<SortOrderEnum>;
  documentSearchPaths?: InputMaybe<SortOrderEnum>;
  generateOnBuild?: InputMaybe<SortOrderEnum>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  functionRoute?: InputMaybe<SortOrderEnum>;
  pluginName?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>;
  component?: InputMaybe<FieldSelectorEnum>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  path?: InputMaybe<SortOrderEnum>;
  component?: InputMaybe<SortOrderEnum>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  browserAPIs?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  file?: InputMaybe<ContentfulAssetFileFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAssetSysFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  placeholderUrl?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  filesize?: InputMaybe<FieldSelectorEnum>;
  publicUrl?: InputMaybe<FieldSelectorEnum>;
  resize?: InputMaybe<RemoteFileResizeFieldSelector>;
  gatsbyImage?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileFieldSelector = {
  url?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<ContentfulAssetFileDetailsFieldSelector>;
  fileName?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileDetailsFieldSelector = {
  size?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFieldSelector>;
};

export type ContentfulAssetFileDetailsImageFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
};

export type RemoteFileResizeFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};

export type ContentfulAssetSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  file?: InputMaybe<ContentfulAssetFileSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAssetSysSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  placeholderUrl?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  filesize?: InputMaybe<SortOrderEnum>;
  publicUrl?: InputMaybe<SortOrderEnum>;
  resize?: InputMaybe<RemoteFileResizeSortInput>;
  gatsbyImage?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileSortInput = {
  url?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<ContentfulAssetFileDetailsSortInput>;
  fileName?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileDetailsSortInput = {
  size?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageSortInput>;
};

export type ContentfulAssetFileDetailsImageSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
};

export type RemoteFileResizeSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentTextFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentTextFilterInput>;
};

export type ContentfulComponentTextFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<ContentfulComponentTextTextFilterInput>;
  article?: InputMaybe<ContentfulArticleFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentTextSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentTextTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArticleFilterListInput = {
  elemMatch?: InputMaybe<ContentfulArticleFilterInput>;
};

export type ContentfulArticleFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<ContentfulComponentTextFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulArticleSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulArticleSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulArticleSysContentTypeFilterInput>;
};

export type ContentfulArticleSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulArticleSysContentTypeSysFilterInput>;
};

export type ContentfulArticleSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentTextSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentTextSysContentTypeFilterInput>;
};

export type ContentfulComponentTextSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentTextSysContentTypeSysFilterInput>;
};

export type ContentfulComponentTextSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleEdge>;
  nodes: Array<ContentfulArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulArticleGroupConnection>;
};


export type ContentfulArticleConnectionDistinctArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleConnectionMaxArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleConnectionMinArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleConnectionSumArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulArticleFieldSelector;
};

export type ContentfulArticleEdge = {
  next?: Maybe<ContentfulArticle>;
  node: ContentfulArticle;
  previous?: Maybe<ContentfulArticle>;
};

export type ContentfulArticleFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  body?: InputMaybe<ContentfulComponentTextFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulArticleSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentTextFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  text?: InputMaybe<ContentfulComponentTextTextFieldSelector>;
  article?: InputMaybe<ContentfulArticleFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentTextSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentTextTextFieldSelector = {
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentTextSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentTextSysContentTypeFieldSelector>;
};

export type ContentfulComponentTextSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentTextSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentTextSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulArticleSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulArticleSysContentTypeFieldSelector>;
};

export type ContentfulArticleSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulArticleSysContentTypeSysFieldSelector>;
};

export type ContentfulArticleSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleEdge>;
  nodes: Array<ContentfulArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulArticleGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulArticleGroupConnectionDistinctArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleGroupConnectionMaxArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleGroupConnectionMinArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleGroupConnectionSumArgs = {
  field: ContentfulArticleFieldSelector;
};


export type ContentfulArticleGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulArticleFieldSelector;
};

export type ContentfulArticleSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  internalName?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  body?: InputMaybe<ContentfulComponentTextSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulArticleSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentTextSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  text?: InputMaybe<ContentfulComponentTextTextSortInput>;
  article?: InputMaybe<ContentfulArticleSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentTextSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentTextTextSortInput = {
  raw?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentTextSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentTextSysContentTypeSortInput>;
};

export type ContentfulComponentTextSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentTextSysContentTypeSysSortInput>;
};

export type ContentfulComponentTextSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulArticleSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulArticleSysContentTypeSortInput>;
};

export type ContentfulArticleSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulArticleSysContentTypeSysSortInput>;
};

export type ContentfulArticleSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentTextEdge>;
  nodes: Array<ContentfulComponentText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentTextGroupConnection>;
};


export type ContentfulComponentTextConnectionDistinctArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextConnectionMaxArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextConnectionMinArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextConnectionSumArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentTextFieldSelector;
};

export type ContentfulComponentTextEdge = {
  next?: Maybe<ContentfulComponentText>;
  node: ContentfulComponentText;
  previous?: Maybe<ContentfulComponentText>;
};

export type ContentfulComponentTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentTextEdge>;
  nodes: Array<ContentfulComponentText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentTextGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentTextGroupConnectionDistinctArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextGroupConnectionMaxArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextGroupConnectionMinArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextGroupConnectionSumArgs = {
  field: ContentfulComponentTextFieldSelector;
};


export type ContentfulComponentTextGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentTextFieldSelector;
};

export type ContentfulPagesSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulPagesSysContentTypeFilterInput>;
};

export type ContentfulPagesSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPagesSysContentTypeSysFilterInput>;
};

export type ContentfulPagesSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPagesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPagesEdge>;
  nodes: Array<ContentfulPages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPagesGroupConnection>;
};


export type ContentfulPagesConnectionDistinctArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesConnectionMaxArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesConnectionMinArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesConnectionSumArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulPagesFieldSelector;
};

export type ContentfulPagesEdge = {
  next?: Maybe<ContentfulPages>;
  node: ContentfulPages;
  previous?: Maybe<ContentfulPages>;
};

export type ContentfulPagesFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulPagesSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulPagesSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulPagesSysContentTypeFieldSelector>;
};

export type ContentfulPagesSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulPagesSysContentTypeSysFieldSelector>;
};

export type ContentfulPagesSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulPagesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPagesEdge>;
  nodes: Array<ContentfulPages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPagesGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulPagesGroupConnectionDistinctArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesGroupConnectionMaxArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesGroupConnectionMinArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesGroupConnectionSumArgs = {
  field: ContentfulPagesFieldSelector;
};


export type ContentfulPagesGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulPagesFieldSelector;
};

export type ContentfulPagesFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPagesSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulPagesSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulPagesSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulPagesSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulPagesSysContentTypeSortInput>;
};

export type ContentfulPagesSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulPagesSysContentTypeSysSortInput>;
};

export type ContentfulPagesSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulPagesFilterListInput = {
  elemMatch?: InputMaybe<ContentfulPagesFilterInput>;
};

export type ContentfulHeroSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulHeroSysContentTypeFilterInput>;
};

export type ContentfulHeroSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulHeroSysContentTypeSysFilterInput>;
};

export type ContentfulHeroSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHeroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHeroGroupConnection>;
};


export type ContentfulHeroConnectionDistinctArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroConnectionMaxArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroConnectionMinArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroConnectionSumArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulHeroFieldSelector;
};

export type ContentfulHeroEdge = {
  next?: Maybe<ContentfulHero>;
  node: ContentfulHero;
  previous?: Maybe<ContentfulHero>;
};

export type ContentfulHeroFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  heading?: InputMaybe<FieldSelectorEnum>;
  subHeading?: InputMaybe<FieldSelectorEnum>;
  backgroundImageDesktop?: InputMaybe<ContentfulAssetFieldSelector>;
  backgroundImageMobile?: InputMaybe<ContentfulAssetFieldSelector>;
  pages?: InputMaybe<ContentfulPagesFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulHeroSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulHeroSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulHeroSysContentTypeFieldSelector>;
};

export type ContentfulHeroSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulHeroSysContentTypeSysFieldSelector>;
};

export type ContentfulHeroSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHeroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHeroGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulHeroGroupConnectionDistinctArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroGroupConnectionMaxArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroGroupConnectionMinArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroGroupConnectionSumArgs = {
  field: ContentfulHeroFieldSelector;
};


export type ContentfulHeroGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulHeroFieldSelector;
};

export type ContentfulHeroFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  subHeading?: InputMaybe<StringQueryOperatorInput>;
  backgroundImageDesktop?: InputMaybe<ContentfulAssetFilterInput>;
  backgroundImageMobile?: InputMaybe<ContentfulAssetFilterInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHeroSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulHeroSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  heading?: InputMaybe<SortOrderEnum>;
  subHeading?: InputMaybe<SortOrderEnum>;
  backgroundImageDesktop?: InputMaybe<ContentfulAssetSortInput>;
  backgroundImageMobile?: InputMaybe<ContentfulAssetSortInput>;
  pages?: InputMaybe<ContentfulPagesSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulHeroSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulHeroSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulHeroSysContentTypeSortInput>;
};

export type ContentfulHeroSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulHeroSysContentTypeSysSortInput>;
};

export type ContentfulHeroSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulImageWithTextSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulImageWithTextSysContentTypeFilterInput>;
};

export type ContentfulImageWithTextSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulImageWithTextSysContentTypeSysFilterInput>;
};

export type ContentfulImageWithTextSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulImageWithTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageWithTextEdge>;
  nodes: Array<ContentfulImageWithText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImageWithTextGroupConnection>;
};


export type ContentfulImageWithTextConnectionDistinctArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextConnectionMaxArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextConnectionMinArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextConnectionSumArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImageWithTextFieldSelector;
};

export type ContentfulImageWithTextEdge = {
  next?: Maybe<ContentfulImageWithText>;
  node: ContentfulImageWithText;
  previous?: Maybe<ContentfulImageWithText>;
};

export type ContentfulImageWithTextFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  sectionHeading?: InputMaybe<FieldSelectorEnum>;
  sectionSubHeading?: InputMaybe<FieldSelectorEnum>;
  imageOnRight?: InputMaybe<FieldSelectorEnum>;
  sectionImage?: InputMaybe<ContentfulAssetFieldSelector>;
  pages?: InputMaybe<ContentfulPagesFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulImageWithTextSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulImageWithTextSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulImageWithTextSysContentTypeFieldSelector>;
};

export type ContentfulImageWithTextSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulImageWithTextSysContentTypeSysFieldSelector>;
};

export type ContentfulImageWithTextSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulImageWithTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageWithTextEdge>;
  nodes: Array<ContentfulImageWithText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImageWithTextGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulImageWithTextGroupConnectionDistinctArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextGroupConnectionMaxArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextGroupConnectionMinArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextGroupConnectionSumArgs = {
  field: ContentfulImageWithTextFieldSelector;
};


export type ContentfulImageWithTextGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImageWithTextFieldSelector;
};

export type ContentfulImageWithTextFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sectionHeading?: InputMaybe<StringQueryOperatorInput>;
  sectionSubHeading?: InputMaybe<StringQueryOperatorInput>;
  imageOnRight?: InputMaybe<BooleanQueryOperatorInput>;
  sectionImage?: InputMaybe<ContentfulAssetFilterInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImageWithTextSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulImageWithTextSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  sectionHeading?: InputMaybe<SortOrderEnum>;
  sectionSubHeading?: InputMaybe<SortOrderEnum>;
  imageOnRight?: InputMaybe<SortOrderEnum>;
  sectionImage?: InputMaybe<ContentfulAssetSortInput>;
  pages?: InputMaybe<ContentfulPagesSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulImageWithTextSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulImageWithTextSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulImageWithTextSysContentTypeSortInput>;
};

export type ContentfulImageWithTextSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulImageWithTextSysContentTypeSysSortInput>;
};

export type ContentfulImageWithTextSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulFaqItemFilterListInput = {
  elemMatch?: InputMaybe<ContentfulFaqItemFilterInput>;
};

export type ContentfulFaqItemFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  question?: InputMaybe<StringQueryOperatorInput>;
  faq_section?: InputMaybe<ContentfulFaqSectionFilterListInput>;
  answer?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqItemSysFilterInput>;
  childrenContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterListInput>;
  childContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFaqSectionFilterListInput = {
  elemMatch?: InputMaybe<ContentfulFaqSectionFilterInput>;
};

export type ContentfulFaqSectionFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  faqItems?: InputMaybe<ContentfulFaqItemFilterListInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqSectionSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFaqSectionSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulFaqSectionSysContentTypeFilterInput>;
};

export type ContentfulFaqSectionSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFaqSectionSysContentTypeSysFilterInput>;
};

export type ContentfulFaqSectionSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFaqItemAnswerTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  answer?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqItemAnswerTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulFaqItemAnswerTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulFaqItemSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulFaqItemSysContentTypeFilterInput>;
};

export type ContentfulFaqItemSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFaqItemSysContentTypeSysFilterInput>;
};

export type ContentfulFaqItemSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFaqItemAnswerTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulFaqItemAnswerTextNodeFilterInput>;
};

export type ContentfulFaqSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFaqSectionEdge>;
  nodes: Array<ContentfulFaqSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFaqSectionGroupConnection>;
};


export type ContentfulFaqSectionConnectionDistinctArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionConnectionMaxArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionConnectionMinArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionConnectionSumArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFaqSectionFieldSelector;
};

export type ContentfulFaqSectionEdge = {
  next?: Maybe<ContentfulFaqSection>;
  node: ContentfulFaqSection;
  previous?: Maybe<ContentfulFaqSection>;
};

export type ContentfulFaqSectionFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  faqItems?: InputMaybe<ContentfulFaqItemFieldSelector>;
  pages?: InputMaybe<ContentfulPagesFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulFaqSectionSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulFaqItemFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  question?: InputMaybe<FieldSelectorEnum>;
  faq_section?: InputMaybe<ContentfulFaqSectionFieldSelector>;
  answer?: InputMaybe<ContentfulFaqItemAnswerTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulFaqItemSysFieldSelector>;
  childrenContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeFieldSelector>;
  childContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulFaqItemAnswerTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  answer?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulFaqItemAnswerTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulFaqItemAnswerTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownRemarkFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFieldSelector>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  rawMarkdownBody?: InputMaybe<FieldSelectorEnum>;
  html?: InputMaybe<FieldSelectorEnum>;
  htmlAst?: InputMaybe<FieldSelectorEnum>;
  excerptAst?: InputMaybe<FieldSelectorEnum>;
  headings?: InputMaybe<MarkdownHeadingFieldSelector>;
  timeToRead?: InputMaybe<FieldSelectorEnum>;
  tableOfContents?: InputMaybe<FieldSelectorEnum>;
  wordCount?: InputMaybe<MarkdownWordCountFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type MarkdownRemarkFrontmatterFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownHeadingFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
  depth?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownWordCountFieldSelector = {
  paragraphs?: InputMaybe<FieldSelectorEnum>;
  sentences?: InputMaybe<FieldSelectorEnum>;
  words?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulFaqItemSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulFaqItemSysContentTypeFieldSelector>;
};

export type ContentfulFaqItemSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulFaqItemSysContentTypeSysFieldSelector>;
};

export type ContentfulFaqItemSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulFaqSectionSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulFaqSectionSysContentTypeFieldSelector>;
};

export type ContentfulFaqSectionSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulFaqSectionSysContentTypeSysFieldSelector>;
};

export type ContentfulFaqSectionSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulFaqSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFaqSectionEdge>;
  nodes: Array<ContentfulFaqSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFaqSectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulFaqSectionGroupConnectionDistinctArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionGroupConnectionMaxArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionGroupConnectionMinArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionGroupConnectionSumArgs = {
  field: ContentfulFaqSectionFieldSelector;
};


export type ContentfulFaqSectionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFaqSectionFieldSelector;
};

export type ContentfulFaqSectionSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  faqItems?: InputMaybe<ContentfulFaqItemSortInput>;
  pages?: InputMaybe<ContentfulPagesSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulFaqSectionSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulFaqItemSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  question?: InputMaybe<SortOrderEnum>;
  faq_section?: InputMaybe<ContentfulFaqSectionSortInput>;
  answer?: InputMaybe<ContentfulFaqItemAnswerTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulFaqItemSysSortInput>;
  childrenContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeSortInput>;
  childContentfulFaqItemAnswerTextNode?: InputMaybe<ContentfulFaqItemAnswerTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulFaqItemAnswerTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  answer?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulFaqItemAnswerTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulFaqItemAnswerTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type MarkdownRemarkSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterSortInput>;
  excerpt?: InputMaybe<SortOrderEnum>;
  rawMarkdownBody?: InputMaybe<SortOrderEnum>;
  html?: InputMaybe<SortOrderEnum>;
  htmlAst?: InputMaybe<SortOrderEnum>;
  excerptAst?: InputMaybe<SortOrderEnum>;
  headings?: InputMaybe<MarkdownHeadingSortInput>;
  timeToRead?: InputMaybe<SortOrderEnum>;
  tableOfContents?: InputMaybe<SortOrderEnum>;
  wordCount?: InputMaybe<MarkdownWordCountSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type MarkdownRemarkFrontmatterSortInput = {
  title?: InputMaybe<SortOrderEnum>;
};

export type MarkdownHeadingSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
  depth?: InputMaybe<SortOrderEnum>;
};

export type MarkdownWordCountSortInput = {
  paragraphs?: InputMaybe<SortOrderEnum>;
  sentences?: InputMaybe<SortOrderEnum>;
  words?: InputMaybe<SortOrderEnum>;
};

export type ContentfulFaqItemSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulFaqItemSysContentTypeSortInput>;
};

export type ContentfulFaqItemSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulFaqItemSysContentTypeSysSortInput>;
};

export type ContentfulFaqItemSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulFaqSectionSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulFaqSectionSysContentTypeSortInput>;
};

export type ContentfulFaqSectionSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulFaqSectionSysContentTypeSysSortInput>;
};

export type ContentfulFaqSectionSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulFaqItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFaqItemEdge>;
  nodes: Array<ContentfulFaqItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFaqItemGroupConnection>;
};


export type ContentfulFaqItemConnectionDistinctArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemConnectionMaxArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemConnectionMinArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemConnectionSumArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFaqItemFieldSelector;
};

export type ContentfulFaqItemEdge = {
  next?: Maybe<ContentfulFaqItem>;
  node: ContentfulFaqItem;
  previous?: Maybe<ContentfulFaqItem>;
};

export type ContentfulFaqItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFaqItemEdge>;
  nodes: Array<ContentfulFaqItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFaqItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulFaqItemGroupConnectionDistinctArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemGroupConnectionMaxArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemGroupConnectionMinArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemGroupConnectionSumArgs = {
  field: ContentfulFaqItemFieldSelector;
};


export type ContentfulFaqItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFaqItemFieldSelector;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  contactSectionSubHeading?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactUsSectionSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulContactUsSectionSysContentTypeFilterInput>;
};

export type ContentfulContactUsSectionSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulContactUsSectionSysContentTypeSysFilterInput>;
};

export type ContentfulContactUsSectionSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput>;
};

export type ContentfulContactUsSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactUsSectionEdge>;
  nodes: Array<ContentfulContactUsSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContactUsSectionGroupConnection>;
};


export type ContentfulContactUsSectionConnectionDistinctArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionConnectionMaxArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionConnectionMinArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionConnectionSumArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContactUsSectionFieldSelector;
};

export type ContentfulContactUsSectionEdge = {
  next?: Maybe<ContentfulContactUsSection>;
  node: ContentfulContactUsSection;
  previous?: Maybe<ContentfulContactUsSection>;
};

export type ContentfulContactUsSectionFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  contactSectionHeading?: InputMaybe<FieldSelectorEnum>;
  pages?: InputMaybe<ContentfulPagesFieldSelector>;
  contactSectionSubHeading?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulContactUsSectionSysFieldSelector>;
  childrenContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector>;
  childContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  contactSectionSubHeading?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContactUsSectionSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulContactUsSectionSysContentTypeFieldSelector>;
};

export type ContentfulContactUsSectionSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulContactUsSectionSysContentTypeSysFieldSelector>;
};

export type ContentfulContactUsSectionSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContactUsSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactUsSectionEdge>;
  nodes: Array<ContentfulContactUsSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContactUsSectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContactUsSectionGroupConnectionDistinctArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionGroupConnectionMaxArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionGroupConnectionMinArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionGroupConnectionSumArgs = {
  field: ContentfulContactUsSectionFieldSelector;
};


export type ContentfulContactUsSectionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContactUsSectionFieldSelector;
};

export type ContentfulContactUsSectionFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  contactSectionHeading?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<ContentfulPagesFilterListInput>;
  contactSectionSubHeading?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContactUsSectionSysFilterInput>;
  childrenContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterListInput>;
  childContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulContactUsSectionSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  contactSectionHeading?: InputMaybe<SortOrderEnum>;
  pages?: InputMaybe<ContentfulPagesSortInput>;
  contactSectionSubHeading?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulContactUsSectionSysSortInput>;
  childrenContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSortInput>;
  childContentfulContactUsSectionContactSectionSubHeadingTextNode?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  contactSectionSubHeading?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulContactUsSectionSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulContactUsSectionSysContentTypeSortInput>;
};

export type ContentfulContactUsSectionSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulContactUsSectionSysContentTypeSysSortInput>;
};

export type ContentfulContactUsSectionSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulSeoComponentSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulSeoComponentSysContentTypeFilterInput>;
};

export type ContentfulSeoComponentSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulSeoComponentSysContentTypeSysFilterInput>;
};

export type ContentfulSeoComponentSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSeoComponentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoComponentEdge>;
  nodes: Array<ContentfulSeoComponent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSeoComponentGroupConnection>;
};


export type ContentfulSeoComponentConnectionDistinctArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentConnectionMaxArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentConnectionMinArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentConnectionSumArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSeoComponentFieldSelector;
};

export type ContentfulSeoComponentEdge = {
  next?: Maybe<ContentfulSeoComponent>;
  node: ContentfulSeoComponent;
  previous?: Maybe<ContentfulSeoComponent>;
};

export type ContentfulSeoComponentFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  openGraphTitle?: InputMaybe<FieldSelectorEnum>;
  openGraphDescription?: InputMaybe<FieldSelectorEnum>;
  openGraphImage?: InputMaybe<ContentfulAssetFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulSeoComponentSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulSeoComponentSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulSeoComponentSysContentTypeFieldSelector>;
};

export type ContentfulSeoComponentSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulSeoComponentSysContentTypeSysFieldSelector>;
};

export type ContentfulSeoComponentSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSeoComponentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoComponentEdge>;
  nodes: Array<ContentfulSeoComponent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSeoComponentGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSeoComponentGroupConnectionDistinctArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentGroupConnectionMaxArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentGroupConnectionMinArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentGroupConnectionSumArgs = {
  field: ContentfulSeoComponentFieldSelector;
};


export type ContentfulSeoComponentGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSeoComponentFieldSelector;
};

export type ContentfulSeoComponentFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  openGraphTitle?: InputMaybe<StringQueryOperatorInput>;
  openGraphDescription?: InputMaybe<StringQueryOperatorInput>;
  openGraphImage?: InputMaybe<ContentfulAssetFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSeoComponentSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulSeoComponentSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  openGraphTitle?: InputMaybe<SortOrderEnum>;
  openGraphDescription?: InputMaybe<SortOrderEnum>;
  openGraphImage?: InputMaybe<ContentfulAssetSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulSeoComponentSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulSeoComponentSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulSeoComponentSysContentTypeSortInput>;
};

export type ContentfulSeoComponentSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulSeoComponentSysContentTypeSysSortInput>;
};

export type ContentfulSeoComponentSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMediaHostQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaHost>;
  ne?: InputMaybe<ShopifyMediaHost>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaHost>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaHost>>>;
};

export type ShopifyMediaContentTypeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaContentType>;
  ne?: InputMaybe<ShopifyMediaContentType>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaContentType>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaContentType>>>;
};

export type ShopifyMediaErrorFilterListInput = {
  elemMatch?: InputMaybe<ShopifyMediaErrorFilterInput>;
};

export type ShopifyMediaErrorFilterInput = {
  code?: InputMaybe<ShopifyMediaErrorCodeQueryOperatorInput>;
  details?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyMediaErrorCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaErrorCode>;
  ne?: InputMaybe<ShopifyMediaErrorCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaErrorCode>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaErrorCode>>>;
};

export type ShopifyMediaPreviewImageFilterInput = {
  image?: InputMaybe<ShopifyImageFilterInput>;
  status?: InputMaybe<ShopifyMediaPreviewImageStatusQueryOperatorInput>;
};

export type ShopifyImageFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalSrc?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  transformedSrc?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ShopifyMediaPreviewImageStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaPreviewImageStatus>;
  ne?: InputMaybe<ShopifyMediaPreviewImageStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaPreviewImageStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaPreviewImageStatus>>>;
};

export type ShopifyMediaStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaStatus>;
  ne?: InputMaybe<ShopifyMediaStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaStatus>>>;
};

export type ShopifyExternalVideoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyExternalVideoEdge>;
  nodes: Array<ShopifyExternalVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyExternalVideoGroupConnection>;
};


export type ShopifyExternalVideoConnectionDistinctArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionMaxArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionMinArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionSumArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyExternalVideoFieldSelector;
};

export type ShopifyExternalVideoEdge = {
  next?: Maybe<ShopifyExternalVideo>;
  node: ShopifyExternalVideo;
  previous?: Maybe<ShopifyExternalVideo>;
};

export type ShopifyExternalVideoFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  embeddedUrl?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyExternalVideoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyExternalVideoEdge>;
  nodes: Array<ShopifyExternalVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyExternalVideoGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyExternalVideoGroupConnectionDistinctArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionMaxArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionMinArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionSumArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyExternalVideoFieldSelector;
};

export type ShopifyExternalVideoFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  embeddedUrl?: InputMaybe<StringQueryOperatorInput>;
  host?: InputMaybe<ShopifyMediaHostQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyExternalVideoSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  embeddedUrl?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyMediaErrorSortInput = {
  code?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMediaPreviewImageSortInput = {
  image?: InputMaybe<ShopifyImageSortInput>;
  status?: InputMaybe<SortOrderEnum>;
};

export type ShopifyImageSortInput = {
  altText?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  originalSrc?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  transformedSrc?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMediaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMediaEdge>;
  nodes: Array<ShopifyMedia>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMediaGroupConnection>;
};


export type ShopifyMediaConnectionDistinctArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionMaxArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionMinArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionSumArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMediaFieldSelector;
};

export type ShopifyMediaEdge = {
  next?: Maybe<ShopifyMedia>;
  node: ShopifyMedia;
  previous?: Maybe<ShopifyMedia>;
};

export type ShopifyMediaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMediaEdge>;
  nodes: Array<ShopifyMedia>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMediaGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyMediaGroupConnectionDistinctArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionMaxArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionMinArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionSumArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMediaFieldSelector;
};

export type ShopifyMediaFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyMediaSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyFileErrorFilterListInput = {
  elemMatch?: InputMaybe<ShopifyFileErrorFilterInput>;
};

export type ShopifyFileErrorFilterInput = {
  code?: InputMaybe<ShopifyFileErrorCodeQueryOperatorInput>;
  details?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyFileErrorCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyFileErrorCode>;
  ne?: InputMaybe<ShopifyFileErrorCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyFileErrorCode>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyFileErrorCode>>>;
};

export type ShopifyFileStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyFileStatus>;
  ne?: InputMaybe<ShopifyFileStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyFileStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyFileStatus>>>;
};

export type ShopifyMediaImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMediaImageEdge>;
  nodes: Array<ShopifyMediaImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMediaImageGroupConnection>;
};


export type ShopifyMediaImageConnectionDistinctArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionMaxArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionMinArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionSumArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMediaImageFieldSelector;
};

export type ShopifyMediaImageEdge = {
  next?: Maybe<ShopifyMediaImage>;
  node: ShopifyMediaImage;
  previous?: Maybe<ShopifyMediaImage>;
};

export type ShopifyMediaImageFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  fileErrors?: InputMaybe<ShopifyFileErrorFieldSelector>;
  fileStatus?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ShopifyImageFieldSelector>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyFileErrorFieldSelector = {
  code?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMediaImageEdge>;
  nodes: Array<ShopifyMediaImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMediaImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyMediaImageGroupConnectionDistinctArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionMaxArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionMinArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionSumArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMediaImageFieldSelector;
};

export type ShopifyMediaImageFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  fileErrors?: InputMaybe<ShopifyFileErrorFilterListInput>;
  fileStatus?: InputMaybe<ShopifyFileStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyMediaImageSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  fileErrors?: InputMaybe<ShopifyFileErrorSortInput>;
  fileStatus?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ShopifyImageSortInput>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  mimeType?: InputMaybe<SortOrderEnum>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyFileErrorSortInput = {
  code?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
};

export type ShopifyModel3dSourceFilterInput = {
  filesize?: InputMaybe<IntQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyModel3dSourceFilterListInput = {
  elemMatch?: InputMaybe<ShopifyModel3dSourceFilterInput>;
};

export type ShopifyModel3dConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyModel3dEdge>;
  nodes: Array<ShopifyModel3d>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyModel3dGroupConnection>;
};


export type ShopifyModel3dConnectionDistinctArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionMaxArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionMinArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionSumArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyModel3dFieldSelector;
};

export type ShopifyModel3dEdge = {
  next?: Maybe<ShopifyModel3d>;
  node: ShopifyModel3d;
  previous?: Maybe<ShopifyModel3d>;
};

export type ShopifyModel3dFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  originalSource?: InputMaybe<ShopifyModel3dSourceFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  sources?: InputMaybe<ShopifyModel3dSourceFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyModel3dSourceFieldSelector = {
  filesize?: InputMaybe<FieldSelectorEnum>;
  format?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyModel3dGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyModel3dEdge>;
  nodes: Array<ShopifyModel3d>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyModel3dGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyModel3dGroupConnectionDistinctArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionMaxArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionMinArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionSumArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyModel3dFieldSelector;
};

export type ShopifyModel3dFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyModel3dSourceFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  sources?: InputMaybe<ShopifyModel3dSourceFilterListInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyModel3dSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  originalSource?: InputMaybe<ShopifyModel3dSourceSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  sources?: InputMaybe<ShopifyModel3dSourceSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyModel3dSourceSortInput = {
  filesize?: InputMaybe<SortOrderEnum>;
  format?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type ShopifyVideoSourceFilterInput = {
  format?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ShopifyVideoSourceFilterListInput = {
  elemMatch?: InputMaybe<ShopifyVideoSourceFilterInput>;
};

export type ShopifyVideoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyVideoEdge>;
  nodes: Array<ShopifyVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyVideoGroupConnection>;
};


export type ShopifyVideoConnectionDistinctArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionMaxArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionMinArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionSumArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyVideoFieldSelector;
};

export type ShopifyVideoEdge = {
  next?: Maybe<ShopifyVideo>;
  node: ShopifyVideo;
  previous?: Maybe<ShopifyVideo>;
};

export type ShopifyVideoFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  originalSource?: InputMaybe<ShopifyVideoSourceFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  sources?: InputMaybe<ShopifyVideoSourceFieldSelector>;
  status?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyVideoSourceFieldSelector = {
  format?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyVideoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyVideoEdge>;
  nodes: Array<ShopifyVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyVideoGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyVideoGroupConnectionDistinctArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionMaxArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionMinArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionSumArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyVideoFieldSelector;
};

export type ShopifyVideoFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyVideoSourceFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sources?: InputMaybe<ShopifyVideoSourceFilterListInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyVideoSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  originalSource?: InputMaybe<ShopifyVideoSourceSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  sources?: InputMaybe<ShopifyVideoSourceSortInput>;
  status?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyVideoSourceSortInput = {
  format?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMetafieldOwnerTypeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMetafieldOwnerType>;
  ne?: InputMaybe<ShopifyMetafieldOwnerType>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMetafieldOwnerType>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMetafieldOwnerType>>>;
};

export type ShopifyMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMetafieldEdge>;
  nodes: Array<ShopifyMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMetafieldGroupConnection>;
};


export type ShopifyMetafieldConnectionDistinctArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionMaxArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionMinArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionSumArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMetafieldFieldSelector;
};

export type ShopifyMetafieldEdge = {
  next?: Maybe<ShopifyMetafield>;
  node: ShopifyMetafield;
  previous?: Maybe<ShopifyMetafield>;
};

export type ShopifyMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMetafieldEdge>;
  nodes: Array<ShopifyMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMetafieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionMaxArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionMinArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionSumArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMetafieldFieldSelector;
};

export type ShopifyMetafieldFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<ShopifyMetafieldOwnerTypeQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyMetafieldSortInput = {
  createdAt?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  key?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  namespace?: InputMaybe<SortOrderEnum>;
  ownerType?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
  valueType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyResourceFeedbackFilterInput = {
  details?: InputMaybe<ShopifyAppFeedbackFilterListInput>;
  summary?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyAppFeedbackFilterListInput = {
  elemMatch?: InputMaybe<ShopifyAppFeedbackFilterInput>;
};

export type ShopifyAppFeedbackFilterInput = {
  app?: InputMaybe<ShopifyAppFilterInput>;
  link?: InputMaybe<ShopifyLinkFilterInput>;
  messages?: InputMaybe<ShopifyUserErrorFilterListInput>;
};

export type ShopifyAppFilterInput = {
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyLinkFilterInput = {
  label?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyUserErrorFilterListInput = {
  elemMatch?: InputMaybe<ShopifyUserErrorFilterInput>;
};

export type ShopifyUserErrorFilterInput = {
  field?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyMediaFilterListInput = {
  elemMatch?: InputMaybe<ShopifyMediaFilterInput>;
};

export type ShopifyMetafieldFilterListInput = {
  elemMatch?: InputMaybe<ShopifyMetafieldFilterInput>;
};

export type ShopifyProductOptionFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductOptionFilterInput>;
};

export type ShopifyProductOptionFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  values?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeFilterInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
};

export type ShopifyMoneyV2FilterInput = {
  amount?: InputMaybe<FloatQueryOperatorInput>;
  currencyCode?: InputMaybe<ShopifyCurrencyCodeQueryOperatorInput>;
};

export type ShopifyCurrencyCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyCurrencyCode>;
  ne?: InputMaybe<ShopifyCurrencyCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyCurrencyCode>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyCurrencyCode>>>;
};

export type ShopifyProductPriceRangeV2FilterInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
};

export type ShopifySeoFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyProductStatus>;
  ne?: InputMaybe<ShopifyProductStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyProductStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyProductStatus>>>;
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantFilterInput>;
};

export type ShopifyProductVariantFilterInput = {
  _product?: InputMaybe<StringQueryOperatorInput>;
  availableForSale?: InputMaybe<BooleanQueryOperatorInput>;
  barcode?: InputMaybe<StringQueryOperatorInput>;
  compareAtPrice?: InputMaybe<FloatQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  inventoryPolicy?: InputMaybe<ShopifyProductVariantInventoryPolicyQueryOperatorInput>;
  inventoryQuantity?: InputMaybe<IntQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairFilterListInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  requiresShipping?: InputMaybe<BooleanQueryOperatorInput>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionFilterListInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  taxCode?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  weight?: InputMaybe<FloatQueryOperatorInput>;
  weightUnit?: InputMaybe<ShopifyWeightUnitQueryOperatorInput>;
  inventoryItem?: InputMaybe<ShopifyInventoryItemFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductVariantInventoryPolicyQueryOperatorInput = {
  eq?: InputMaybe<ShopifyProductVariantInventoryPolicy>;
  ne?: InputMaybe<ShopifyProductVariantInventoryPolicy>;
  in?: InputMaybe<Array<InputMaybe<ShopifyProductVariantInventoryPolicy>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyProductVariantInventoryPolicy>>>;
};

export type ShopifyProductVariantPricePairFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantPricePairFilterInput>;
};

export type ShopifyProductVariantPricePairFilterInput = {
  compareAtPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
  price?: InputMaybe<ShopifyMoneyV2FilterInput>;
};

export type ShopifyProductFilterInput = {
  _featuredMedia?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<ShopifyImageFilterInput>;
  featuredMedia?: InputMaybe<ShopifyMediaFilterInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFilterInput>;
  giftCardTemplateSuffix?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: InputMaybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isGiftCard?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  mediaCount?: InputMaybe<IntQueryOperatorInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  onlineStorePreviewUrl?: InputMaybe<StringQueryOperatorInput>;
  onlineStoreUrl?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ShopifyProductOptionFilterListInput>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeFilterInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  requiresSellingPlan?: InputMaybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  seo?: InputMaybe<ShopifySeoFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyProductStatusQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  totalInventory?: InputMaybe<IntQueryOperatorInput>;
  totalVariants?: InputMaybe<IntQueryOperatorInput>;
  tracksInventory?: InputMaybe<BooleanQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  variants?: InputMaybe<ShopifyProductVariantFilterListInput>;
  vendor?: InputMaybe<StringQueryOperatorInput>;
  collections?: InputMaybe<ShopifyCollectionFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyCollectionFilterListInput = {
  elemMatch?: InputMaybe<ShopifyCollectionFilterInput>;
};

export type ShopifyCollectionFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFilterInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  products?: InputMaybe<ShopifyProductFilterListInput>;
  productsCount?: InputMaybe<IntQueryOperatorInput>;
  ruleSet?: InputMaybe<ShopifyCollectionRuleSetFilterInput>;
  seo?: InputMaybe<ShopifySeoFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sortOrder?: InputMaybe<ShopifyCollectionSortOrderQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductFilterInput>;
};

export type ShopifyCollectionRuleSetFilterInput = {
  appliedDisjunctively?: InputMaybe<BooleanQueryOperatorInput>;
  rules?: InputMaybe<ShopifyCollectionRuleFilterListInput>;
};

export type ShopifyCollectionRuleFilterListInput = {
  elemMatch?: InputMaybe<ShopifyCollectionRuleFilterInput>;
};

export type ShopifyCollectionRuleFilterInput = {
  column?: InputMaybe<ShopifyCollectionRuleColumnQueryOperatorInput>;
  condition?: InputMaybe<StringQueryOperatorInput>;
  relation?: InputMaybe<ShopifyCollectionRuleRelationQueryOperatorInput>;
};

export type ShopifyCollectionRuleColumnQueryOperatorInput = {
  eq?: InputMaybe<ShopifyCollectionRuleColumn>;
  ne?: InputMaybe<ShopifyCollectionRuleColumn>;
  in?: InputMaybe<Array<InputMaybe<ShopifyCollectionRuleColumn>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyCollectionRuleColumn>>>;
};

export type ShopifyCollectionRuleRelationQueryOperatorInput = {
  eq?: InputMaybe<ShopifyCollectionRuleRelation>;
  ne?: InputMaybe<ShopifyCollectionRuleRelation>;
  in?: InputMaybe<Array<InputMaybe<ShopifyCollectionRuleRelation>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyCollectionRuleRelation>>>;
};

export type ShopifyCollectionSortOrderQueryOperatorInput = {
  eq?: InputMaybe<ShopifyCollectionSortOrder>;
  ne?: InputMaybe<ShopifyCollectionSortOrder>;
  in?: InputMaybe<Array<InputMaybe<ShopifyCollectionSortOrder>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyCollectionSortOrder>>>;
};

export type ShopifySelectedOptionFilterListInput = {
  elemMatch?: InputMaybe<ShopifySelectedOptionFilterInput>;
};

export type ShopifySelectedOptionFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyWeightUnitQueryOperatorInput = {
  eq?: InputMaybe<ShopifyWeightUnit>;
  ne?: InputMaybe<ShopifyWeightUnit>;
  in?: InputMaybe<Array<InputMaybe<ShopifyWeightUnit>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyWeightUnit>>>;
};

export type ShopifyInventoryItemFilterInput = {
  countryCodeOfOrigin?: InputMaybe<ShopifyCountryCodeQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  duplicateSkuCount?: InputMaybe<IntQueryOperatorInput>;
  harmonizedSystemCode?: InputMaybe<StringQueryOperatorInput>;
  inventoryHistoryUrl?: InputMaybe<StringQueryOperatorInput>;
  inventoryLevels?: InputMaybe<ShopifyInventoryLevelFilterListInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  locationsCount?: InputMaybe<IntQueryOperatorInput>;
  provinceCodeOfOrigin?: InputMaybe<StringQueryOperatorInput>;
  requiresShipping?: InputMaybe<BooleanQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  tracked?: InputMaybe<BooleanQueryOperatorInput>;
  trackedEditable?: InputMaybe<ShopifyEditablePropertyFilterInput>;
  unitCost?: InputMaybe<ShopifyMoneyV2FilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ShopifyCountryCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyCountryCode>;
  ne?: InputMaybe<ShopifyCountryCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyCountryCode>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyCountryCode>>>;
};

export type ShopifyInventoryLevelFilterListInput = {
  elemMatch?: InputMaybe<ShopifyInventoryLevelFilterInput>;
};

export type ShopifyInventoryLevelFilterInput = {
  _location?: InputMaybe<StringQueryOperatorInput>;
  available?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<ShopifyLocationFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyLocationFilterInput = {
  activatable?: InputMaybe<BooleanQueryOperatorInput>;
  address?: InputMaybe<ShopifyLocationAddressFilterInput>;
  addressVerified?: InputMaybe<BooleanQueryOperatorInput>;
  deactivatable?: InputMaybe<BooleanQueryOperatorInput>;
  deactivatedAt?: InputMaybe<StringQueryOperatorInput>;
  deletable?: InputMaybe<BooleanQueryOperatorInput>;
  fulfillmentService?: InputMaybe<ShopifyFulfillmentServiceFilterInput>;
  fulfillsOnlineOrders?: InputMaybe<BooleanQueryOperatorInput>;
  hasActiveInventory?: InputMaybe<BooleanQueryOperatorInput>;
  hasUnfulfilledOrders?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  shipsInventory?: InputMaybe<BooleanQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyLocationAddressFilterInput = {
  address1?: InputMaybe<StringQueryOperatorInput>;
  address2?: InputMaybe<StringQueryOperatorInput>;
  city?: InputMaybe<StringQueryOperatorInput>;
  country?: InputMaybe<StringQueryOperatorInput>;
  countryCode?: InputMaybe<StringQueryOperatorInput>;
  formatted?: InputMaybe<StringQueryOperatorInput>;
  latitude?: InputMaybe<FloatQueryOperatorInput>;
  longitude?: InputMaybe<FloatQueryOperatorInput>;
  phone?: InputMaybe<StringQueryOperatorInput>;
  province?: InputMaybe<StringQueryOperatorInput>;
  provinceCode?: InputMaybe<StringQueryOperatorInput>;
  zip?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyFulfillmentServiceFilterInput = {
  callbackUrl?: InputMaybe<StringQueryOperatorInput>;
  fulfillmentOrdersOptIn?: InputMaybe<BooleanQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  inventoryManagement?: InputMaybe<BooleanQueryOperatorInput>;
  productBased?: InputMaybe<BooleanQueryOperatorInput>;
  serviceName?: InputMaybe<StringQueryOperatorInput>;
  shippingMethods?: InputMaybe<ShopifyShippingMethodFilterListInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<ShopifyFulfillmentServiceTypeQueryOperatorInput>;
};

export type ShopifyShippingMethodFilterListInput = {
  elemMatch?: InputMaybe<ShopifyShippingMethodFilterInput>;
};

export type ShopifyShippingMethodFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyFulfillmentServiceTypeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyFulfillmentServiceType>;
  ne?: InputMaybe<ShopifyFulfillmentServiceType>;
  in?: InputMaybe<Array<InputMaybe<ShopifyFulfillmentServiceType>>>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyFulfillmentServiceType>>>;
};

export type ShopifyEditablePropertyFilterInput = {
  locked?: InputMaybe<BooleanQueryOperatorInput>;
  reason?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductGroupConnection>;
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionMaxArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionMinArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionSumArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductFieldSelector;
};

export type ShopifyProductEdge = {
  next?: Maybe<ShopifyProduct>;
  node: ShopifyProduct;
  previous?: Maybe<ShopifyProduct>;
};

export type ShopifyProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductGroupConnectionDistinctArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionMaxArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionMinArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionSumArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductFieldSelector;
};

export type ShopifyProductSortInput = {
  _featuredMedia?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  descriptionHtml?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<ShopifyImageSortInput>;
  featuredMedia?: InputMaybe<ShopifyMediaSortInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackSortInput>;
  giftCardTemplateSuffix?: InputMaybe<SortOrderEnum>;
  handle?: InputMaybe<SortOrderEnum>;
  hasOnlyDefaultVariant?: InputMaybe<SortOrderEnum>;
  hasOutOfStockVariants?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  isGiftCard?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  media?: InputMaybe<ShopifyMediaSortInput>;
  mediaCount?: InputMaybe<SortOrderEnum>;
  metafield?: InputMaybe<ShopifyMetafieldSortInput>;
  metafields?: InputMaybe<ShopifyMetafieldSortInput>;
  onlineStorePreviewUrl?: InputMaybe<SortOrderEnum>;
  onlineStoreUrl?: InputMaybe<SortOrderEnum>;
  options?: InputMaybe<ShopifyProductOptionSortInput>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeSortInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2SortInput>;
  productType?: InputMaybe<SortOrderEnum>;
  publishedAt?: InputMaybe<SortOrderEnum>;
  requiresSellingPlan?: InputMaybe<SortOrderEnum>;
  sellingPlanGroupCount?: InputMaybe<SortOrderEnum>;
  seo?: InputMaybe<ShopifySeoSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  storefrontId?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  templateSuffix?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  totalInventory?: InputMaybe<SortOrderEnum>;
  totalVariants?: InputMaybe<SortOrderEnum>;
  tracksInventory?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  variants?: InputMaybe<ShopifyProductVariantSortInput>;
  vendor?: InputMaybe<SortOrderEnum>;
  collections?: InputMaybe<ShopifyCollectionSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyResourceFeedbackSortInput = {
  details?: InputMaybe<ShopifyAppFeedbackSortInput>;
  summary?: InputMaybe<SortOrderEnum>;
};

export type ShopifyAppFeedbackSortInput = {
  app?: InputMaybe<ShopifyAppSortInput>;
  link?: InputMaybe<ShopifyLinkSortInput>;
  messages?: InputMaybe<ShopifyUserErrorSortInput>;
};

export type ShopifyAppSortInput = {
  shopifyId?: InputMaybe<SortOrderEnum>;
};

export type ShopifyLinkSortInput = {
  label?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type ShopifyUserErrorSortInput = {
  field?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
};

export type ShopifyProductOptionSortInput = {
  name?: InputMaybe<SortOrderEnum>;
  position?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  values?: InputMaybe<SortOrderEnum>;
};

export type ShopifyProductPriceRangeSortInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
};

export type ShopifyMoneyV2SortInput = {
  amount?: InputMaybe<SortOrderEnum>;
  currencyCode?: InputMaybe<SortOrderEnum>;
};

export type ShopifyProductPriceRangeV2SortInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
};

export type ShopifySeoSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type ShopifyProductVariantSortInput = {
  _product?: InputMaybe<SortOrderEnum>;
  availableForSale?: InputMaybe<SortOrderEnum>;
  barcode?: InputMaybe<SortOrderEnum>;
  compareAtPrice?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  displayName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ShopifyImageSortInput>;
  inventoryPolicy?: InputMaybe<SortOrderEnum>;
  inventoryQuantity?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  media?: InputMaybe<ShopifyMediaSortInput>;
  metafield?: InputMaybe<ShopifyMetafieldSortInput>;
  metafields?: InputMaybe<ShopifyMetafieldSortInput>;
  position?: InputMaybe<SortOrderEnum>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairSortInput>;
  price?: InputMaybe<SortOrderEnum>;
  product?: InputMaybe<ShopifyProductSortInput>;
  requiresShipping?: InputMaybe<SortOrderEnum>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionSortInput>;
  sellingPlanGroupCount?: InputMaybe<SortOrderEnum>;
  sku?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  storefrontId?: InputMaybe<SortOrderEnum>;
  taxCode?: InputMaybe<SortOrderEnum>;
  taxable?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  weight?: InputMaybe<SortOrderEnum>;
  weightUnit?: InputMaybe<SortOrderEnum>;
  inventoryItem?: InputMaybe<ShopifyInventoryItemSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyProductVariantPricePairSortInput = {
  compareAtPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
  price?: InputMaybe<ShopifyMoneyV2SortInput>;
};

export type ShopifySelectedOptionSortInput = {
  name?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
};

export type ShopifyInventoryItemSortInput = {
  countryCodeOfOrigin?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  duplicateSkuCount?: InputMaybe<SortOrderEnum>;
  harmonizedSystemCode?: InputMaybe<SortOrderEnum>;
  inventoryHistoryUrl?: InputMaybe<SortOrderEnum>;
  inventoryLevels?: InputMaybe<ShopifyInventoryLevelSortInput>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  locationsCount?: InputMaybe<SortOrderEnum>;
  provinceCodeOfOrigin?: InputMaybe<SortOrderEnum>;
  requiresShipping?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  sku?: InputMaybe<SortOrderEnum>;
  tracked?: InputMaybe<SortOrderEnum>;
  trackedEditable?: InputMaybe<ShopifyEditablePropertySortInput>;
  unitCost?: InputMaybe<ShopifyMoneyV2SortInput>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type ShopifyInventoryLevelSortInput = {
  _location?: InputMaybe<SortOrderEnum>;
  available?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  location?: InputMaybe<ShopifyLocationSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyLocationSortInput = {
  activatable?: InputMaybe<SortOrderEnum>;
  address?: InputMaybe<ShopifyLocationAddressSortInput>;
  addressVerified?: InputMaybe<SortOrderEnum>;
  deactivatable?: InputMaybe<SortOrderEnum>;
  deactivatedAt?: InputMaybe<SortOrderEnum>;
  deletable?: InputMaybe<SortOrderEnum>;
  fulfillmentService?: InputMaybe<ShopifyFulfillmentServiceSortInput>;
  fulfillsOnlineOrders?: InputMaybe<SortOrderEnum>;
  hasActiveInventory?: InputMaybe<SortOrderEnum>;
  hasUnfulfilledOrders?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  isActive?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  shipsInventory?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyLocationAddressSortInput = {
  address1?: InputMaybe<SortOrderEnum>;
  address2?: InputMaybe<SortOrderEnum>;
  city?: InputMaybe<SortOrderEnum>;
  country?: InputMaybe<SortOrderEnum>;
  countryCode?: InputMaybe<SortOrderEnum>;
  formatted?: InputMaybe<SortOrderEnum>;
  latitude?: InputMaybe<SortOrderEnum>;
  longitude?: InputMaybe<SortOrderEnum>;
  phone?: InputMaybe<SortOrderEnum>;
  province?: InputMaybe<SortOrderEnum>;
  provinceCode?: InputMaybe<SortOrderEnum>;
  zip?: InputMaybe<SortOrderEnum>;
};

export type ShopifyFulfillmentServiceSortInput = {
  callbackUrl?: InputMaybe<SortOrderEnum>;
  fulfillmentOrdersOptIn?: InputMaybe<SortOrderEnum>;
  handle?: InputMaybe<SortOrderEnum>;
  inventoryManagement?: InputMaybe<SortOrderEnum>;
  productBased?: InputMaybe<SortOrderEnum>;
  serviceName?: InputMaybe<SortOrderEnum>;
  shippingMethods?: InputMaybe<ShopifyShippingMethodSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type ShopifyShippingMethodSortInput = {
  code?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
};

export type ShopifyEditablePropertySortInput = {
  locked?: InputMaybe<SortOrderEnum>;
  reason?: InputMaybe<SortOrderEnum>;
};

export type ShopifyCollectionSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  descriptionHtml?: InputMaybe<SortOrderEnum>;
  feedback?: InputMaybe<ShopifyResourceFeedbackSortInput>;
  handle?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ShopifyImageSortInput>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  metafield?: InputMaybe<ShopifyMetafieldSortInput>;
  metafields?: InputMaybe<ShopifyMetafieldSortInput>;
  products?: InputMaybe<ShopifyProductSortInput>;
  productsCount?: InputMaybe<SortOrderEnum>;
  ruleSet?: InputMaybe<ShopifyCollectionRuleSetSortInput>;
  seo?: InputMaybe<ShopifySeoSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  sortOrder?: InputMaybe<SortOrderEnum>;
  storefrontId?: InputMaybe<SortOrderEnum>;
  templateSuffix?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyCollectionRuleSetSortInput = {
  appliedDisjunctively?: InputMaybe<SortOrderEnum>;
  rules?: InputMaybe<ShopifyCollectionRuleSortInput>;
};

export type ShopifyCollectionRuleSortInput = {
  column?: InputMaybe<SortOrderEnum>;
  condition?: InputMaybe<SortOrderEnum>;
  relation?: InputMaybe<SortOrderEnum>;
};

export type ShopifyCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyCollectionGroupConnection>;
};


export type ShopifyCollectionConnectionDistinctArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionConnectionMaxArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionConnectionMinArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionConnectionSumArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyCollectionFieldSelector;
};

export type ShopifyCollectionEdge = {
  next?: Maybe<ShopifyCollection>;
  node: ShopifyCollection;
  previous?: Maybe<ShopifyCollection>;
};

export type ShopifyCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyCollectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyCollectionGroupConnectionDistinctArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionGroupConnectionMaxArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionGroupConnectionMinArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionGroupConnectionSumArgs = {
  field: ShopifyCollectionFieldSelector;
};


export type ShopifyCollectionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyCollectionFieldSelector;
};

export type ShopifyInventoryLevelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyInventoryLevelEdge>;
  nodes: Array<ShopifyInventoryLevel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyInventoryLevelGroupConnection>;
};


export type ShopifyInventoryLevelConnectionDistinctArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelConnectionMaxArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelConnectionMinArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelConnectionSumArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyInventoryLevelFieldSelector;
};

export type ShopifyInventoryLevelEdge = {
  next?: Maybe<ShopifyInventoryLevel>;
  node: ShopifyInventoryLevel;
  previous?: Maybe<ShopifyInventoryLevel>;
};

export type ShopifyInventoryLevelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyInventoryLevelEdge>;
  nodes: Array<ShopifyInventoryLevel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyInventoryLevelGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyInventoryLevelGroupConnectionDistinctArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelGroupConnectionMaxArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelGroupConnectionMinArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelGroupConnectionSumArgs = {
  field: ShopifyInventoryLevelFieldSelector;
};


export type ShopifyInventoryLevelGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyInventoryLevelFieldSelector;
};

export type ShopifyLocationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLocationEdge>;
  nodes: Array<ShopifyLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLocationGroupConnection>;
};


export type ShopifyLocationConnectionDistinctArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationConnectionMaxArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationConnectionMinArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationConnectionSumArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyLocationFieldSelector;
};

export type ShopifyLocationEdge = {
  next?: Maybe<ShopifyLocation>;
  node: ShopifyLocation;
  previous?: Maybe<ShopifyLocation>;
};

export type ShopifyLocationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLocationEdge>;
  nodes: Array<ShopifyLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLocationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyLocationGroupConnectionDistinctArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationGroupConnectionMaxArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationGroupConnectionMinArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationGroupConnectionSumArgs = {
  field: ShopifyLocationFieldSelector;
};


export type ShopifyLocationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyLocationFieldSelector;
};

export type ShopifyLineItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLineItemEdge>;
  nodes: Array<ShopifyLineItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLineItemGroupConnection>;
};


export type ShopifyLineItemConnectionDistinctArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemConnectionMaxArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemConnectionMinArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemConnectionSumArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyLineItemFieldSelector;
};

export type ShopifyLineItemEdge = {
  next?: Maybe<ShopifyLineItem>;
  node: ShopifyLineItem;
  previous?: Maybe<ShopifyLineItem>;
};

export type ShopifyLineItemFieldSelector = {
  _product?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  product?: InputMaybe<ShopifyProductFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyLineItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLineItemEdge>;
  nodes: Array<ShopifyLineItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLineItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyLineItemGroupConnectionDistinctArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemGroupConnectionMaxArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemGroupConnectionMinArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemGroupConnectionSumArgs = {
  field: ShopifyLineItemFieldSelector;
};


export type ShopifyLineItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyLineItemFieldSelector;
};

export type ShopifyLineItemFilterInput = {
  _product?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyLineItemSortInput = {
  _product?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  product?: InputMaybe<ShopifyProductSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyLineItemFilterListInput = {
  elemMatch?: InputMaybe<ShopifyLineItemFilterInput>;
};

export type ShopifyRefundFilterListInput = {
  elemMatch?: InputMaybe<ShopifyRefundFilterInput>;
};

export type ShopifyRefundFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyOrderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyOrderEdge>;
  nodes: Array<ShopifyOrder>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyOrderGroupConnection>;
};


export type ShopifyOrderConnectionDistinctArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderConnectionMaxArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderConnectionMinArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderConnectionSumArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyOrderFieldSelector;
};

export type ShopifyOrderEdge = {
  next?: Maybe<ShopifyOrder>;
  node: ShopifyOrder;
  previous?: Maybe<ShopifyOrder>;
};

export type ShopifyOrderFieldSelector = {
  closed?: InputMaybe<FieldSelectorEnum>;
  closedAt?: InputMaybe<FieldSelectorEnum>;
  edited?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  lineItems?: InputMaybe<ShopifyLineItemFieldSelector>;
  refunds?: InputMaybe<ShopifyRefundFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ShopifyRefundFieldSelector = {
  createdAt?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyOrderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyOrderEdge>;
  nodes: Array<ShopifyOrder>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyOrderGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyOrderGroupConnectionDistinctArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderGroupConnectionMaxArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderGroupConnectionMinArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderGroupConnectionSumArgs = {
  field: ShopifyOrderFieldSelector;
};


export type ShopifyOrderGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyOrderFieldSelector;
};

export type ShopifyOrderFilterInput = {
  closed?: InputMaybe<BooleanQueryOperatorInput>;
  closedAt?: InputMaybe<DateQueryOperatorInput>;
  edited?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  lineItems?: InputMaybe<ShopifyLineItemFilterListInput>;
  refunds?: InputMaybe<ShopifyRefundFilterListInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyOrderSortInput = {
  closed?: InputMaybe<SortOrderEnum>;
  closedAt?: InputMaybe<SortOrderEnum>;
  edited?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  lineItems?: InputMaybe<ShopifyLineItemSortInput>;
  refunds?: InputMaybe<ShopifyRefundSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ShopifyRefundSortInput = {
  createdAt?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldSelector;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ContentfulFaqItemAnswerTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFaqItemAnswerTextNodeEdge>;
  nodes: Array<ContentfulFaqItemAnswerTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFaqItemAnswerTextNodeGroupConnection>;
};


export type ContentfulFaqItemAnswerTextNodeConnectionDistinctArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeConnectionMaxArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeConnectionMinArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeConnectionSumArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};

export type ContentfulFaqItemAnswerTextNodeEdge = {
  next?: Maybe<ContentfulFaqItemAnswerTextNode>;
  node: ContentfulFaqItemAnswerTextNode;
  previous?: Maybe<ContentfulFaqItemAnswerTextNode>;
};

export type ContentfulFaqItemAnswerTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFaqItemAnswerTextNodeEdge>;
  nodes: Array<ContentfulFaqItemAnswerTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFaqItemAnswerTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulFaqItemAnswerTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeGroupConnectionMaxArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeGroupConnectionMinArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeGroupConnectionSumArgs = {
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};


export type ContentfulFaqItemAnswerTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFaqItemAnswerTextNodeFieldSelector;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactUsSectionContactSectionSubHeadingTextNodeEdge>;
  nodes: Array<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnection>;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnectionDistinctArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnectionMaxArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnectionMinArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnectionSumArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeEdge = {
  next?: Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
  node: ContentfulContactUsSectionContactSectionSubHeadingTextNode;
  previous?: Maybe<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
};

export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactUsSectionContactSectionSubHeadingTextNodeEdge>;
  nodes: Array<ContentfulContactUsSectionContactSectionSubHeadingTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnectionMaxArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnectionMinArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnectionSumArgs = {
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};


export type ContentfulContactUsSectionContactSectionSubHeadingTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContactUsSectionContactSectionSubHeadingTextNodeFieldSelector;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  displayField?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulContentTypeSysFieldSelector>;
};

export type ContentfulContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  displayField?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulContentTypeSysSortInput>;
};

export type ContentfulContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type SeoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQueryQuery = { contentfulSeoComponent?: { openGraphDescription?: string | null, openGraphTitle?: string | null, description?: string | null, url?: string | null, title?: string | null, openGraphImage?: { file?: { url?: string | null } | null } | null } | null };

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { contentfulPages?: { title?: string | null, sections?: Array<{ __typename: 'ContentfulContactUsSection', id: string, contactSectionHeading?: string | null, contactSectionSubHeading?: { contactSectionSubHeading?: string | null } | null } | { __typename: 'ContentfulFaqSection', id: string, title?: string | null, faqItems?: Array<{ question?: string | null, answer?: { answer?: string | null } | null } | null> | null } | { __typename: 'ContentfulHero', id: string, heading?: string | null, subHeading?: string | null, backgroundImageDesktop?: { gatsbyImageData?: any | null } | null, backgroundImageMobile?: { gatsbyImageData?: any | null } | null } | { __typename: 'ContentfulImageWithText', id: string, sectionHeading?: string | null, sectionSubHeading?: string | null, imageOnRight?: boolean | null, sectionImage?: { gatsbyImageData?: any | null } | null } | null> | null } | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type ContentfulPagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ContentfulPagesQueryQuery = { allContentfulPages: { edges: Array<{ node: { id: string, title?: string | null, slug?: string | null, sections?: Array<{ __typename: 'ContentfulContactUsSection', contactSectionHeading?: string | null, contactSectionSubHeading?: { contactSectionSubHeading?: string | null } | null } | { __typename: 'ContentfulFaqSection', title?: string | null, faqItems?: Array<{ question?: string | null, answer?: { answer?: string | null } | null } | null> | null } | { __typename: 'ContentfulHero', id: string, heading?: string | null, subHeading?: string | null, backgroundImageDesktop?: { gatsbyImageData?: any | null } | null, backgroundImageMobile?: { gatsbyImageData?: any | null } | null } | { __typename: 'ContentfulImageWithText', id: string, imageOnRight?: boolean | null, sectionHeading?: string | null, sectionSubHeading?: string | null, spaceId?: string | null, sectionImage?: { gatsbyImageData?: any | null } | null } | null> | null } }> } };

export type ProductPagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductPagesQueryQuery = { allShopifyProduct: { edges: Array<{ node: { id: string, storefrontId: string, title: string, totalInventory: number, descriptionHtml: string, handle: string, featuredImage?: { gatsbyImageData?: any | null } | null, variants: Array<{ price: number, title: string, id: string, storefrontId: string }> } }> } };

export type CollectionPagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionPagesQueryQuery = { allShopifyCollection: { edges: Array<{ node: { title: string, handle: string, descriptionHtml: string, products: Array<{ handle: string, title: string, featuredImage?: { gatsbyImageData?: any | null } | null, priceRangeV2: { maxVariantPrice: { amount: number }, minVariantPrice: { amount: number } } }> } }> } };
