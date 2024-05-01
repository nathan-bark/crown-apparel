import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, DirectoryItemBody, BackgroundImg } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={handleNavigate}>
      <BackgroundImg imageurl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
