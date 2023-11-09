import axios from "axios";
import ListPostView from "./ListPostView";
import { useEffect, useState } from "react";
import { APIPostType } from "../../constants/Types";

const ListPostController = () => {
  const [postData, setPostData] = useState<APIPostType[] | null>(null);
  const [error, setError] = useState<string | null>();
  const [reversedData, setReversedData] = useState<APIPostType[] | null>(null);
  const [user, setUser] = useState<string>("");
  const [popup, setPopup] = useState<boolean>(false);
  const [filteredPost, setFilteredPost] = useState<APIPostType[] | null>(null);
  //!APIden veri Alma
  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        const initialData = res.data;
        setPostData(initialData);
        setReversedData([...initialData].reverse()); // Başlangıçta verileri tersine çevir
      })
      .catch((err) => setError(" An error occurred. Error:" + err));
  }, []);
  //!Popup-Filter
  const handlePopUp = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    clickedUser: string
  ): void => {
    if (e.target instanceof HTMLElement && postData) {
      setUser(e.target.innerText);
      setPopup(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      const cloneArray: APIPostType[] = postData?.filter(
        (i) => i.user === clickedUser
      );
      setFilteredPost(cloneArray);
    }
  };
  //!Sort işlemi
  if (postData) {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      if (selectedValue === "newest") {
        setReversedData([...postData].reverse());
      }
      if (selectedValue === "oldest") {
        setReversedData([...postData]); // Orijinal sıralamayı kullan
      }
    };
    if (error) {
      return <div>{error}</div>;
    }
    //!Prop Gönderme
    return (
      <ListPostView
        postData={postData}
        handleSelectChange={handleSelectChange}
        reversedData={reversedData}
        setPopup={setPopup}
        popup={popup}
        handlePopUp={handlePopUp}
        user={user}
        filteredPost={filteredPost}
      />
    );
  }
};
export default ListPostController;
