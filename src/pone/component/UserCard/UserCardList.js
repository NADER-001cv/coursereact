import React, { useState } from "react";
import { Container, Lightbox, Buttonformuser, Input } from "../../layout/index";

import UserForm from "../UserForm/UserForm";
import UserCard from "./UserCard";
import styleListCard from "./usercard.module.css";

function UserCardList() {
  const [Names, setName] = useState([
    { id: 1, name: "ahmed", age: 30, adress: "Gass", gender: "male" },
    { id: 2, name: "Ali", age: 18, adress: "Gaza", gender: "male" },
    { id: 3, name: "Jamila", age: 35, adress: "Meka", gender: "female" },
    { id: 4, name: "Mouna", age: 90, adress: "Sousse", gender: "female" },
  ]);
  const [closeBtn, setCloseBtn] = useState(false);
  const [search, setSearch] = useState("");
  const HandleLightbox = () => {
    setCloseBtn(!closeBtn);
  };

  const DeleteHandle = (id) => {
    setName((prevstate) => Names.filter((name) => name.id !== id));
  };

  const SaveUserForm = (userdata) => {
    // setName([...Names,userdata])
    setName((prevstate) => {
      return [...prevstate, userdata];
    });
  };
  const namesLoop = Names.map((el) => (
    <UserCard
      {...el}
      key={el.id}
      DeleteHandle={DeleteHandle}
      HandleLightbox={HandleLightbox}
    />
  ));



  const searchNames = () =>{
        if(search.length == 0){


          const list = undefined;

// ✅ Initialize to Empty Array if falsy
const namesLoop = list || [];


          return namesLoop?.filter(el => el.name.includes(search))

        }
        return namesLoop ;

  }
  return (
    <>
      {closeBtn && (
        <>
          <Lightbox>
            <Container size custemstyle={{ backgroundColor: "white" }}>
              <Buttonformuser HandleLightbox={HandleLightbox} />
              <UserForm
                SaveUserForm={SaveUserForm}
                HandleLightbox={HandleLightbox}
              />
            </Container>
          </Lightbox>
        </>
      )}

      <Container>
        <div className={styleListCard.input_search}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
            label="search"
            
          />
        </div>
        {namesLoop }
      </Container>
    </>
  );
}

export default UserCardList;
