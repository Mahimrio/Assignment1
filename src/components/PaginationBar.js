import { Pagination } from "react-bootstrap";

function PaginationBar({ currentPage, totalPages, onPageChange }) {
  const items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {items}
        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}

export default PaginationBar;