import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { createPost } from '../api';
import { TAG } from '../api/types';

const TitleInput = styled.input`
  display: block;
  width: 100%;
  height: 66px;
  background: transparent;
  ding: 2rem 0 0 0;
  font-size: 2.75rem;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: #212529;
`;

const TagSelect = styled.select`
  font-size: 1.125rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  min-width: 8rem;
  color: #212529;
  border: none;
`;

const Editor = styled.textarea`
  width: 100%;
  height: calc(100% - 200px);
  min-height: 100px;
  border: none;
  resize: none;
  font-size: 1.125rem;
  flex: 1 1 0%;
`;

const BottomSheet = styled.div`
  bottom: 0;
  width: 760px;
  height: 4rem;
  background: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ExitButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  color: #212529;
  font-size: 1.125rem;
`;

const SaveButton = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 4px;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: rgb(50, 148, 248);
  border: 1px solid rgb(50, 148, 248);
  color: #ffffff;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

const Write = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTag(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleExit = () => {
    // 나가기 버튼을 눌렀을 때 이전 페이지로 돌아가기
    navigate(-1);
  };

  const handleSave = async () => {
    // 저장하기 버튼을 눌렀을 때 게시글 저장하기
    try {
      //await createPost({ title, contents: content, tag });
      await createPost()
      // 게시글 생성 후 홈 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
      // 에러 처리
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleTitleChange}
      />
      <TagSelect value={tag} onChange={handleTagChange}>
        <option value="">태그를 선택하세요</option>
        <option value={TAG.REACT}>React</option>
        <option value={TAG.JAVA}>JAVA</option>
        <option value={TAG.SPRINGBOOT}>SPRINGBOOT</option>
        <option value={TAG.DB}>DB</option>
      </TagSelect>
      <Editor
        placeholder="내용을 입력하세요"
        value={content}
        onChange={handleContentChange}
      />
      <BottomSheet>
        <ExitButton onClick={handleExit}>나가기</ExitButton>
        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </BottomSheet>
    </div>
  );
};


export default Write;