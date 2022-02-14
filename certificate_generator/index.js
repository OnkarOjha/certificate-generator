const generatePDF = async (name) =>{
    const {PDFDocument , rgb} = PDFLib;
    const exBytes = await fetch("./certificate.pdf").then(res=>
        res.arrayBuffer());
    const exFont = await fetch("./Sanchez-Regular.ttf").then(res => {
        return res.arrayBuffer();
    });

    

    



    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myfont = await pdfDoc.embedFont(exFont);

    const pages = pdfDoc.getPages();
    const firstPg = pages[0];

    firstPg.drawText(name,{
        x: 60,
        y: 285,
        size: 58,
        font: myfont,
        
        
    })
    const uri = await pdfDoc.saveAsBase64({dataUri : true});
    window.open(uri);
    saveAs(uri,"Certificate.pdf", {autoBom : true})
    //document.querySelector("#mypdf").src = uri;

};
const submitButton = document.getElementById("submit");
const inputVal = document.querySelector("#name")
submitButton.addEventListener("click",()=>{

    const val = inputVal.value;
    generatePDF(val);
    
});


