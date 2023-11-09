export type APIPostType = {
  date: string;
  id: string;
  text: string;
  title: string;
  user: string;
};

export type AddPostViewPropsTypes = {
  onInputChange: (key: string, value: string) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export interface ListPostViewIPropsTypes {
  postData?: APIPostType[] | null;
  reversedData: APIPostType[] | null;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setPopup: React.Dispatch<boolean>;
  popup: boolean;
  user: string;
  handlePopUp: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    param: string
  ) => void;
  filteredPost: APIPostType[] | null;
}
