// 마이페이지
import styled from "styled-components";

interface ProfileProps {}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // 화면 전체 높이를 차지하게 합니다.
`;

const ProfileImage = styled.img`
  max-width: 100%;
  height: auto; // 이미지의 비율을 유지하면서 크기를 조절합니다.
`;

const Profile: React.FC<ProfileProps> = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="./myprofile.svg" alt="profile" />
    </ProfileContainer>
  );
};

export default Profile;
