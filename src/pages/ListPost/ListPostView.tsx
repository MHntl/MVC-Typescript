import Loading from "../../components/Loading";
import { ListPostViewIPropsTypes } from "../../constants/Types";

const ListPostView: React.FC<ListPostViewIPropsTypes> = ({
  reversedData,
  handleSelectChange,
  setPopup,
  popup,
  user,
  handlePopUp,
  filteredPost,
}) => {
  //* -----------------------------------
  if (reversedData) {
    return (
      <div className="post-container ">
        <div className="d-flex justify-content-between align-items-center">
          <h5 style={{ color: "gold" }}>
            Post number:{" "}
            <span style={{ color: "rgb(79, 228, 79)" }}>
              {reversedData.length}
            </span>
          </h5>
          <div className="form-floating sort">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              name="sorting"
              onChange={handleSelectChange}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <label htmlFor="floatingSelect">Sort By</label>
          </div>
        </div>
        {reversedData ? (
          reversedData.map((post) => (
            <div className="post" key={post.id}>
              <div className="info">
                <h3>{post.title}</h3>
                <p onClick={(e) => handlePopUp(e, post.user)}>{post.user}</p>
              </div>
              <p className="text">{post.text}</p>
            </div>
          ))
        ) : (
          <Loading />
        )}
        {/* PopUp */}
        {popup && (
          <div className="popup">
            <div className="inner-popup">
              <div className="inner-top">
                <p>
                  <span>{user}</span>'s Post(s)
                </p>
                <button onClick={() => setPopup(false)}>Close</button>
              </div>
              {filteredPost?.map((item) => (
                <div key={item.id} className="inner-mid">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
              <div className="inner-bot">
                <p>
                  <span>{user}</span>'s Post Number :{" "}
                  <span>{filteredPost?.length}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};
export default ListPostView;
