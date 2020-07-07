export default{
     render(template, data){

        // console.log("data : " );
       // console.log(data);
        const templateName = template + 'Template';

        const tempEl = document.getElementById(templateName);
        const tempSrc = tempEl.innerHTML;
        const renderFn = Handlebars.compile(tempSrc);

        return renderFn(data);

    }
}