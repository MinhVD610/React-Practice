import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/UserService";
import ReactPaginate from "react-paginate";

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [TotalPages, setTotalPages] = useState(0);
  const [PageSize, setPageSize] = useState(0);
  const Total = { totalPages: 3 };

  useEffect(() => {
    // call apis
    getUsers(1);
  }, []);
  const getUsers = async (page) => {
    let res = await fetchAllUser(page, Total.totalPages);
    if (res) {
      console.log(res);
      console.log(".");
      setListUsers(res.data);
      setTotalPages(res.totalPages);
    }
  };
  const handlesPageClick = (event) => {
    console.log(event.selected);
    getUsers(+ event.selected + 1);
    console.log(+ event.selected + 1);
  }
  const handlePageClick = (page) => {
  setPage(page);
  // gọi API hoặc xử lý tương ứng trang
};
  const handleNextPageClick = (event) => {
    let selectedPage = page + 1;
    setPage(selectedPage);
  };
  const handlePrePageClick = (event) => {
    let selectedPage = page - 1;
    setPage(selectedPage);
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Name</th>
            <th>CategoryName</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                  <td>{item.categoryName}</td>
                </tr>
              );
              
            })}
        </tbody>
      </Table>
      {/* <div class="pagination">
        <a href="#" onClick={handlePrePageClick} class="page-item">
          &lt; Prev
        </a>
        {
    Array.from({ length: TotalPages.totalPages  }, (_, index) => (
      <a
        href="#"
        key={index}
        onClick={() => handlePageClick(index + 1)}
        className={`page-item ${TotalPages.currentPage === index + 1 ? "active" : ""}`}
      >
        {index + 1}
      </a>
    ))
  }
        <a href="#" onClick={handleNextPageClick} class="page-item">
          Next &gt;
        </a>
      </div> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlesPageClick}
        pageRangeDisplayed={5}
        pageCount={TotalPages}
        previousLabel="< previous"

        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
};

export default TableUsers;
