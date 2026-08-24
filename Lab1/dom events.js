import { eventNames } from "node:cluster";
import { EventEmitter } from "node:stream";


function createDOMElement(){
        const emitter=new EventEmitter();

        return{
            addEventEmitter(eventNames,callback){
                emitter.on(eventNames,callback);
            },
            removeEventListener(eventNames,callback){
                emitter.off(eventNames,callback);
            },

            dispatchEvent(event){
                emitter.emit(event)
            },
        };

    
}
const button=createDOMElement;
button.addEventEmitter('click',()=>{
    console.log("button clicked");
})

button.dispatchEvent({
    type:"click",
    detail:"Hello"
});

button.removeEventListener('click',handleclick);

function handleclick(event){
   console.log('Button clicked!');
   console.log('Event Type: $(event.type');
   console.log('Message:'(event.detail))
}
