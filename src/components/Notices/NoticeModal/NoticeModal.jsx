// import { useState } from 'react';
import { useSelector /*, useDispatch*/ } from 'react-redux';

import { selectOneNotice } from 'redux/Notices/NoticesSelector';
import { getIsLoggedIn } from '../../../redux/Auth/selectors';
import { toast } from 'react-toastify';
import defaultImage from '../../../images/userAndPets/Rectangle 58.png';

import {
  Category,
  Header,
  PictureData,
  MyLi,
  Comments,
  MyBtn,
  ImageContainer,
  BtnContainer,
} from './NoticeModal.styled';
import { CiHeart } from 'react-icons/ci';

export const NoticeModal = () => {
  const isAuth = useSelector(getIsLoggedIn);
  const isLoading = useSelector(selectOneNotice);
  const notice = useSelector(selectOneNotice);
  // const dispatch = useDispatch();
  // const isFavorite = useSelector();
  // const [isFavorited, setFavorited] = useState(isFavorite);

  const hadleClickAddFavorite = () => {
    if (!isAuth) {
      return toast.error(`You must be authorized to use this functionality!.`);
    }

    // if (isFavorited) {
    //   return toast.warn('Notice already added to favorite');
    // }
    // addFavoriteNotice(notice.id);
    // dispatch(userActions.addFavorite(notice.id));
    toast.success(' Notice add to favorite');
    // return setFavorited(true);
  };

  return (
    <div>
      {!isLoading && (
        <>
          <ImageContainer>
            <PictureData>
              <img
                src={notice.avatarURL ? notice.avatarURL : defaultImage}
                alt={notice.title}
              ></img>
              <Category>{notice.category}</Category>
            </PictureData>
            <div>
              <Header>Cute dog looking for a home</Header>
              <ul>
                <MyLi>
                  <p>Name:</p>
                  <span>{notice.name}</span>
                </MyLi>
                <MyLi>
                  <p>Birthday:</p>
                  <span>{notice.birthday}</span>
                </MyLi>
                <MyLi>
                  <p>Breed:</p>
                  <span>{notice.breed}</span>
                </MyLi>
                <MyLi>
                  <p>Place:</p>
                  <span>{notice.location}</span>
                </MyLi>
                <MyLi>
                  <p>The sex:</p>
                  <span>{notice.theSex}</span>
                </MyLi>
                <MyLi>
                  <p>Email:</p>
                  <span>{notice?.owner?.email}</span>
                </MyLi>
                <MyLi>
                  <p>Phone:</p>
                  <span>{notice?.owner?.phone}</span>
                </MyLi>

                {notice.category === 'sell' && (
                  <MyLi>
                    <p>Sell:</p>
                    <span>{notice.price}</span>
                  </MyLi>
                )}
              </ul>
            </div>
          </ImageContainer>

          <Comments>
            Comments: <span>{notice.comments}</span>
          </Comments>

          <BtnContainer>
            {
              <a href="tel:{notice?.owner?.phone}">
                <MyBtn active={'active'}>Contact</MyBtn>
              </a>
            }

            <MyBtn onClick={hadleClickAddFavorite}>
              Add to
              <span>
                <CiHeart />
              </span>
            </MyBtn>
          </BtnContainer>
        </>
      )}
    </div>
  );
};
