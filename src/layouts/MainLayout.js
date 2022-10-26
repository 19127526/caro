import Box from "../components/Box/Box";
import { Layout}from 'antd';
import "./MainLayout.css"
import Board from "../components/Board/Board";
import Game from "../components/Game/Game";

const { Header, Footer, Sider, Content } = Layout;
const MainLayout=()=>{
  return (
    <>
      <Layout>
        <Header style={{background:"white",display:"flex",justifyContent:"center",fontSize:"50px"}}>Game Caro 3x3</Header>
        <Content style={{background:"white",display:"flex",justifyContent:"center"}}> <Game/></Content>
      </Layout>
    </>
  )
}

export default MainLayout