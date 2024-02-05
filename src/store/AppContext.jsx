import { createContext, useEffect, useReducer, useState } from "react";

const addPost = () => {};
const deletePost = () => {};
// const [isAuth, setIsAuth] = useState(false);

export const Context = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const ContextProvider = ({ children }) => {
  /* CreateContext (useContext) hook: Is used as provider of  States & Methods to be passed to all the components
  useState or useReducerState: State can be set using either of these Hooks
   */

  const [initPostList, setinitPostList] = useState(DEFAULT_POST_LIST);
  // const isAuth = false;
  const [isAuth, setisAuth] = useState(true);

  const setAuth = (auth) => {
    auth ? setisAuth(auth) : console.log("setauth error");
  };
  useEffect(() => {
    // This effect runs whenever isAuth changes
    console.log("isAuth inside context:", isAuth);
  }, [isAuth]);

  return (
    <Context.Provider
      value={{
        initPostList,
        addPost,
        deletePost,
        isAuth,
        setisAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Junior React Frontend Developer in Bristol",
    company: "Oliver Bernard",
    experience: 3,
    body: "Lead JavaScript SDET - SaaS - JavaScript",
    applications: 10,
    userId: "root-user",
    tags: ["Java", "react", "MERN"],
  },
  {
    id: "2",
    title: "Senior JavaScript SDET",
    company: "Capgemini",
    experience: 3,
    body: "This is a sponsored job post",
    applications: 44,
    userId: "root-user",
    tags: ["Python", "react", "MERN"],
  },
  {
    id: "3",
    title: "P2P analyst",
    company: "Heidelberg Materials",
    experience: 3,
    body: "This is a sponsored job post",
    applications: 4,
    userId: "root-user",
    tags: ["Python", "react", "MERN"],
  },
  {
    id: "4",
    title: "Senior JavaScript SDET",
    company: "Fake Company",
    experience: 3,
    body: "Lead JavaScript SDET - SaaS - JavaScript, Cypress, Cucumber, Line Managemen Oliver Bernard are currently working with an industry leading SaaS company who are ramping up their Platform at a speed of knots to scale in line with their continued growth worldwide.They are looking for a Lead JavaScript focused SDET to join their QA team as part of ongoing expansion plans across Technology, in particular their SDET / Testing function as they look to drive out their Automation practices in line with an ever improving Test Strategy set in place by their team of established Lead SDETs and Test Managers.",
    applications: 100,
    userId: "root-user",
    tags: ["Python", "react", "MERN"],
  },
];
export default ContextProvider;
