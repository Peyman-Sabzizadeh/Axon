import { useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  totalItems: number;
  userPerPage?: number;
};

function PaginationUi({ totalItems, userPerPage = 10 }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;
  const totalPages = Math.ceil(totalItems / userPerPage);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <Pagination>
      <PaginationContent className="*:cursor-pointer *:rounded-lg">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i + 1}>
            <PaginationLink
              onClick={() => handlePageChange(i + 1)}
              isActive={currentPage === i + 1}
              className={currentPage === i + 1 ? "bg-gray-200" : ""}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationUi;
