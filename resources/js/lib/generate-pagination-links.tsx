import { PaginationEllipsis, PaginationItem, PaginationLink } from '@/Components/ui/pagination';
import { JSX } from 'react';
 
type PaginationLink = {
    url: string;
    label: string;
}
 
export const generatePaginationLinks = (currentPage: number, totalPages: number, path: string,  links: PaginationLink[], pageQuery: string = '?page=') => {
    const pages: JSX.Element[] = [];
    console.log(links)
    if (totalPages <= 6) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink href={links[i].url} isActive={i === currentPage}>
                        {i}
                    </PaginationLink>
                </PaginationItem>,
            );
        }
    } else {
        for (let i = 1; i <= 2; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink href={links[i].url} isActive={i === currentPage}>
                        {i}
                    </PaginationLink>
                </PaginationItem>,
            );
        }
        if (2 < currentPage && currentPage < totalPages - 1) {
            pages.push(<PaginationEllipsis />);
            pages.push(
                <PaginationItem key={currentPage}>
                    <PaginationLink href="" isActive={true}>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>,
            );
        }
        pages.push(<PaginationEllipsis />);
        for (let i = totalPages - 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink href={links[i].url} isActive={i === currentPage}>
                        {i}
                    </PaginationLink>
                </PaginationItem>,
            );
        }
    }
    return pages;
};