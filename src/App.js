import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import UserList from "./components/user/UserList.js";
import AddUser from "./components/user/AddUser.js";
import EditUser from "./components/user/EditUser.js";

import KelasList from "./components/kelas/KelasList.js";
import AddKelas from "./components/kelas/AddKelas.js";
import EditKelas from "./components/kelas/EditKelas.js";

import MapelList from "./components/mapel/MapelList.js";
import AddMapel from "./components/mapel/AddMapel.js";
import EditMapel from "./components/mapel/EditMapel.js";

import SiswaList from "./components/siswa/SiswaList.js";
import EditSiswa from "./components/siswa/EditSiswa.js";
import AddSiswa from "./components/siswa/AddSiswa.js";

import AbsensiList from "./components/absensi/AbsensiList.js";
import AddAbsensi from "./components/absensi/AddAbsensi.js";
import EditAbsensi from "./components/absensi/EditAbsensi.js";

import AbsensiShow from "./components/absensi/AbsensiShow.js";
import AbsensiShowOnly from "./components/absensi/AbsensiShowOnly.js";

import DetailAbsensiList from "./components/detailabsensi/DetailAbsensiList.js";

import Login from "./components/login/Login.jsx";





function App() {
  return (
    <BrowserRouter className="has-background-grey">
      <Routes>
        <Route path="/user" element={<UserList/>}/>
        <Route path="/user/add" element={<AddUser/>}/>
        <Route path="/user/edit/:id" element={<EditUser/>}/>

        <Route path="/kelas" element={<KelasList/>}></Route>
        <Route path="/kelas/add" element={<AddKelas/>}></Route>
        <Route path="/kelas/edit/:id" element={<EditKelas/>}></Route>

        <Route path="/mapel" element={<MapelList/>}></Route>
        <Route path="/mapel/add" element={<AddMapel/>}></Route>
        <Route path="/mapel/edit/:id" element={<EditMapel/>}></Route>

        <Route path="/siswa" element={<SiswaList/>}></Route>
        <Route path="/siswa/add" element={<AddSiswa/>}></Route>
        <Route path="/siswa/edit/:id" element={<EditSiswa/>}></Route>

        <Route path="/absensi" element={<AbsensiList/>}></Route>
        <Route path="/absensi/add" element={<AddAbsensi/>}></Route>
        <Route path="/absensi/edit/:id" element={<EditAbsensi/>}></Route>

        <Route path="/" element={<DetailAbsensiList/>}></Route>
        <Route path="/absensiShow/:id" element={<AbsensiShowOnly/>}></Route>

        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
