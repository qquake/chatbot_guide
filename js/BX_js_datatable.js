$(document).ready(function() {
    
    /* Datatable simple */
    $('#datatable').DataTable({
        pagingType: 'full_numbers',
        language: {
            searchPlaceholder: 'Search'
        },
        dom: 'Rlfrtip'
    });
    /* Datatable with sum */
    $('#datatable_sum').DataTable({
        pagingType: 'full_numbers',
        language: {
            searchPlaceholder: 'Search'
        },
        footerCallback: function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };
 
            // Total over all pages
            total = api
                .column( 5 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                } );
 
            // Total over this page
            pageTotal = api
                .column( 5, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
            $( api.column( 5 ).footer() ).html(
                '$'+pageTotal + ' ($'+ total +' total)'
            );
        }
    });
	/* Datatable with scroll */
    $('#datatable_scroll').DataTable({
        language: {
            searchPlaceholder: 'Search'
        },
        scrollX: true,
        scrollY: '300px',
        scrollCollapse: true,
        dom: 'Rlfrtip',
        paging: false
    });
	/* Datatable cell edit */
    $('#datatable_cellEdit').DataTable({
        pagingType: "full_numbers",
        language: {
            searchPlaceholder: 'Search'
        },
        bSort: false,
        dom: 'Rlfrtip',
        fnCreatedRow: function( nRow, aData, iDataIndex ) {
            $('td:eq(6)', nRow).html(
                '<button class="btn btn-grey btn-sm btn-remove">Del</button><button class="btn btn-grey btn-sm btn-edit">Edit</button>'
            );
        }
    });
    /* Datatable column edit */
    $('#datatable_colEdit').DataTable({
        pagingType: 'full_numbers',
        language: {
            searchPlaceholder: 'Search'
        },
        dom: 'Rlfrtip'
    });
    
    $("#datatable_cellEdit").on('click', '.btn-remove', function() {
        var $tr = $(this).closest('tr');
        $tr.removeClass('row-edit');
        if($tr.hasClass('row-new')){
            $tr.remove();
            return;
        }
        if ( $tr.hasClass('row-remove') ) {
            $tr.removeClass('row-remove');
        } else {
            $tr.addClass('row-remove');
        }
    });

    $("#datatable_cellEdit").on('click', '.btn-edit', function() {
        var $tr = $(this).closest('tr');
        $tr.removeClass('row-remove');
        if ( $tr.hasClass('row-edit') ) {
            $tr.removeClass('row-edit');
        } else {
            $tr.addClass('row-edit');
        }
    });
    
});
