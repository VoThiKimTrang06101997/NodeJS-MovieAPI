const userList = [
  {
    id: 1,
    name: "Võ Thị Kim Trang",
    email: "trangvo@gmail.com",
    password: "123456",
    phone: "0909865173",
    role: "ADMIN",
  },
  {
    id: 2,
    name: "Trần Thị Kim Ngan",
    email: "ngantran@gmail.com",
    password: "123456789",
    phone: "0908765423",
    role: "ADMIN",
  },
];

const laydanhsachnguoidung = (req, res) => {
  res.send(userList);
};

const timkiemchitietnguoidung = (req, res) => {
  const { id } = req.params;
  res.send("find detail user by id: " + id);
};

const themnguoidung = (req, res) => {
  const data = req.body;
  userList.push({ ...data, id: Math.random() });
  res.send("create");
};

const capnhatnguoidung = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.send("update");
};

const xoanguoidung = (req, res) => {
  const { id } = req.params;
  res.send("remove");
};

module.exports = {
  laydanhsachnguoidung,
  timkiemchitietnguoidung,
  themnguoidung,
  capnhatnguoidung,
  xoanguoidung,
};
