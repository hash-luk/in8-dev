import { useEffect, useState } from "react";
import api from "../../libs/api";
import * as S from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BackToTop from "../../asssets/icons/top.svg";
import MobileTable from "../Mobile-Table";

export default function DataTable() {
  let id = 1;
  const [data, setData] = useState([{}]);
  const [title, setTitle] = useState(``);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    if (windowWidth <= 500) {
      setTitle(`Lista de <br /> cadastros`);
    } else {
      setTitle(`Lista de cadastros`);
    }
  });

  async function getData() {
    await api.get("/users").then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <S.Container>
      <h1>LISTA DE {windowWidth <= 500 ? <br /> : ``}CADASTROS</h1>

      {windowWidth <= 500 ? (
        <MobileTable />
      ) : (
        <TableContainer className="data-grid">
          <Table sx={{ maxWidth: 900 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #29abe2" }}
                ></TableCell>
                <TableCell className="title">NOME</TableCell>
                <TableCell className="title">E-MAIL</TableCell>
                <TableCell className="title">NASCIMENTO</TableCell>
                <TableCell className="title">TELEFONE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="data-id text">{id++}</TableCell>
                  <TableCell className="text">{user.name}</TableCell>
                  <TableCell className="text">{user.email}</TableCell>
                  <TableCell className="text">
                    {new Date(user.nascimento).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text">{user.telephone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div className="back-to-top" onClick={backToTop}>
        <img src={BackToTop} alt="Botão para voltar ao topo" />
      </div>
    </S.Container>
  );
}
