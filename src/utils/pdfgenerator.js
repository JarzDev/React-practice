export function generatePdfReport(report) {
    var fonts = {
        Poppins: {
            normal: 'assets/fonts/Poppins/Poppins-Regular.ttf',
            bold: 'assets/fonts/Poppins/Poppins-SemiBold.ttf'
        },
    };
    var PdfPrinter = require('pdfmake');
    var printer = new PdfPrinter(fonts);
    var fs = require('fs');

    const createdAt = report.createdAt
    console.log(report)
    const executedAt = report.date

    var dd = {
        pageSize: 'LETTER',
        footer: {
            columns: [
                { text: 'Smart Graphics Solutions SpA - Santiago Chile - www.smartgraphics.cl', alignment: 'center', style: 'footer' }
            ]
        },
        
        content: [{
                image: 'assets/logo_sgs_ips.jpg',
                width: 120
            },
            { text: 'Santiago ' + createdAt, style: 'p', alignment: 'right' },
            { text: 'Reporte Técnico', style: 'h1', margin: [0, 5, 0, 0] },

            {
                columns: [{
                        style: 'reportHeader',
                        margin: [0, 10, 0, 0],
                        text: 'Cliente: ' + report.customer + '\n' + report.contact,
                    },
                    {
                        style: 'reportHeader',
                        margin: [0, 10, 0, 0],
                        text: report.equipment + '\n' + report.serial,
                    },
                    {
                        style: 'reportHeader',
                        margin: [0, 10, 0, 0],
                        text: 'Fecha Ejecución:' + '\n' + executedAt,
                    },
                    {
                        style: 'reportHeader',
                        margin: [0, 10, 0, 0],
                        text: 'Ejectuado por:' + '\n' + report.createdBy,
                    },
                ]
            },
            { text: 'Asunto: ' + report.title, style: 'h2', margin: [0, 5, 0, 0] },
            { text: 'Tareas Ejecutadas :', style: 'h2', margin: [0, 5, 0, 0] },
            {
                margin: [0, 5, 0, 0],
                table: {
                    widths: ['*'],
                    heights: [100],
                    body: [
                        [{ text: report.task, style: 'p', fontsize: 8 }],
                        [{ text: 'Total horas usadas: ' + report.hours, style: 'p', color: '#7A3D8A' }, ],
                    ]
                }
            },
            { text: 'Partes Utilizadas:', style: 'h2', margin: [0, 10, 0, 0] },
            {
                style: 'tableExample',
                table: {
                    style: 'table',
                    widths: ['*', '*', '*'],
                    headerRows: 1,
                    body: buildPartsTableBody(report.parts, ['number', 'name', 'qty']),
                },
                layout: 'lightHorizontalLines',
            },
            { text: 'Recomendaciones :', style: 'h2', margin: [0, 10, 0, 0] },
            {
                style: 'tableExample',
                margin: [0, 5, 0, 0],
                table: {
                    widths: ['*'],
                    heights: [30],
                    body: [
                        [{ text: report.recomendations, style: 'p', fontsize: 8 }, ],
                    ]
                }
            },
            {
                text: 'El equipo de Smart Graphics Solutions le agradece la confianza que ha depositado en nosotros. Si tiene algún inconveniente, duda o consulta, por favor no dude en contactarnos. \n Estamos listos para colaborar con Usted.',
                style: 'p',
                absolutePosition: { x: 40, y: 630 }
            },
            { image: 'assets/firma_jose_informe.png', width: 150, absolutePosition: { x: 220, y: 673 } },
            { text: 'Jose A Ramirez \n +56 9 5492 7928 \n jose@smartgraphics.cl', style: 'p', aligment: 'center', absolutePosition: { x: 250, y: 700 } },

        ],
        defaultStyle: {
            font: 'Poppins',
            fontSize: 10,
            color: '#5B5A59'
        },
        styles: {
            h1: {
                font: 'Poppins',
                fontSize: 20,
                bold: true,
                alignment: 'center',
                color: '#7A3D8A',
            },
            h2: {
                font: 'Poppins',
                fontSize: 12,
                bold: true,
                alignment: 'left',
                color: '#7A3D8A',
            },
            p: {
                font: 'Poppins',
                fontSize: 10,
                lineHeight: 1.2,
                color: '#5B5A59',
            },
            reportHeader: {
                font: 'Poppins',
                fontSize: 10,
                lineHeight: 1.5,
                color: '#5B5A59',
            },
            footer: {
                font: 'Poppins',
                fontSize: 8,
                color: '#7A3D8A',
            },
            table: {
                font: 'Poppins',
                fontSize: 8,
                color: '#5B5A59',
            },
        },
    }
    const documentName = 'Reporte Tecnico ' + report.customer + '.pdf';
    var pdfDoc = printer.createPdfKitDocument(dd)
    pdfDoc.pipe(fs.createWriteStream(documentName));
    pdfDoc.end()
    return documentName
}

function buildPartsTableBody(data, columns) {
    var body = [];
    body.push(['Nro. Parte', 'Descripción', 'Cantidad']);
    data.forEach(function(row) {
        var dataRow = [];
        columns.forEach(function(column) {
            dataRow.push(row[column].toString());
        })
        body.push(dataRow);
    });
    return body;
}