import React, { useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

export default function Articles() {
  const allArticles = [
    {
      title: "The Art of Storytelling: A Guide to Captivating Your Audience",
      status: "Published",
      lastEdited: "2 days ago",
    },
    {
      title: "Crafting Compelling Characters: A Step-by-Step Approach",
      status: "Draft",
      lastEdited: "1 week ago",
    },
    {
      title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations",
      status: "Published",
      lastEdited: "2 weeks ago",
    },
    {
      title: "Building Scalable Web Apps with React",
      status: "Pending Review",
      lastEdited: "3 weeks ago",
    },
    {
      title: "Exploring AI in Modern Education",
      status: "Draft",
      lastEdited: "1 month ago",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  return (
    <div className="p-4">
      <h2 className="mb-4 fw-bold">My Articles</h2>
      <Table bordered hover responsive className="rounded">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article, idx) => (
            <tr key={idx}>
              <td>{article.title}</td>
              <td>
                <Badge
                  bg={
                    article.status === "Published"
                      ? "success"
                      : article.status === "Draft"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {article.status}
                </Badge>
              </td>
              <td>{article.lastEdited}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
}
