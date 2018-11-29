import React from 'react';
import { Pagination as Pag, PaginationItem, PaginationLink } from 'reactstrap';

export default class Pagination extends React.Component {
    render () {
        return (
            <Pag aria-label = 'Page navigation example'>
                <PaginationItem>
                    <PaginationLink onClick = { this.props.first } >
                        First
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous onClick = { this.props.prev } />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink >
                        {this.props.current}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next onClick = { this.props.next } />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick = { this.props.last }>
                        Last
                    </PaginationLink>
                </PaginationItem>
            </Pag>
        );
    }
}
