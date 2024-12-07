import { Button, Card, Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ICardMenuProps {
  title: string;
  page: string;
}

export const CardMenu = ({ title, page }: ICardMenuProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{title}</h2>
      <Button onClick={() => navigate(page)}>Entrar</Button>
    </div>
  );
};
