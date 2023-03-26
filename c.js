
customElements.define('tfl-input',
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            const style = document.createElement("style");
            style.textContent = `
            .text { position: relative;}
            .text input {  padding: 8px; font-size: 1.2rem;}
            .text label { position: absolute; top: -10px; left: 5px; background: #fff; font-size: 1rem; padding-left: 5px; padding-right: 5px; display: none;}
            input:focus ~ label, input:not(:placeholder-shown) ~ label {display: block!important;}
            input:focus::placeholder {color: transparent;}`;
            this.shadowRoot.innerHTML = `
        <div class="text"> 
            <input placeholder="" type="text" name="name" value="" />
            <label>  </label>
        </div>
        `;
        this.shadowRoot.append(style);
            
        }
        get value() {
            return this.shadowRoot.querySelector("input").value;
        }
        connectedCallback() {
          this.attrs =  this.getAttributeNames();
          
            let title = this.getAttribute("title") || "";
            let name = this.getAttribute("name") || "name";
            let value = this.getAttribute("value") || ""
            
        const event = new CustomEvent('thaydoi', { value: ""});
        this.shadowRoot.querySelector("input").addEventListener("keyup", (evt) => {
            
            event.value = evt.target.value;
            var t = this.getAttribute("thaydoi");

           
        })
        
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log(name, newValue, oldValue);
            switch(name) {
                case "name": 
                 this.shadowRoot.querySelector("input").setAttribute("name", newValue || "");
                     break;
                  case "type":  
                  this.shadowRoot.querySelector("input").setAttribute("type", newValue || "text");
                  break;
                 case "value": 
                     this.shadowRoot.querySelector("input").setAttribute("value", newValue || "");
                     break;
                 
                 case "title": 
                      this.shadowRoot.querySelector("label").innerText = newValue || "";
                      this.shadowRoot.querySelector("input").setAttribute("placeholder",newValue || "" );
                     break;
                
            
             }
         

      
      

        }

        static get observedAttributes() {
            return ["title", "name", "value", "type"];

        }
        disconnectedCallback() { }
        adoptedCallback() { }
        _onChange(evt) {
            console.log();
        }
    }

);




