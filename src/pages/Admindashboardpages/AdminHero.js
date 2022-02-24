import React, {useState} from 'react'
import styled from 'styled-components'
import Dashboard from '../Userdashboardpages/Dashboard';
import Heart from 'react-animated-heart';


const AdminHero = () => {
  const [isClick, setClick] = useState(false);
  return (
      <AdminHeroStyled>
        <div>
          <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>
        </div>
        <Dashboard/>
        </AdminHeroStyled>
  )
}

const AdminHeroStyled = styled.div`


`;

export default AdminHero