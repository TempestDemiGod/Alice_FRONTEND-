// import React, { useState, useEffect } from "react";
// import Mermaid from "../../utils/Mermaid";
// import { listadoProject, registerArtifact } from '../../utils/artifact';
// import { listado } from "../../utils/proyects";

// let idProject
// let apikey
// let temaproyecto
// async function verProyecto(){
//   const data = {
//     idProject
// }
//   let proyecto = await listadoProject(data)
//   console.log('funco')
//   console.log(typeof(proyecto))
//   console.log(proyecto)
//   apikey = proyecto.data.apiKey
//   temaproyecto = proyecto.data.tema
//   console.log(proyecto.data.apiKey)
//   console.log(proyecto.data.tema)
// }
// function MindmappingTab({ prompt, setPrompt, result, setResult, callOpenAi }) {
//   // const getTema = async () => {
//   //   try {
//   //     const tema = await listado();
//   //     setProyecto(tema.data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };

//   // useEffect(() => {
    
//   //   getTema();

//   // }, []);


//   // const [nombre, setNombre] = useState('')
//   // const [prompts, setPrompts] = useState('')
//   // const [respuesta, setRespuesta] = useState('')

//   // const handleNombre = (e) => {
//   //   setNombre(e.target.value)
//   //   console.log(nombre);
//   // }

//   // const handlePrompts = (e) => {
//   // setPrompts(e.target.value)
//   // console.log(prompts);
//   // }

//   // const handleRespuesta = (e) => {
//   //     setRespuesta(e.target.value)
//   //     console.log(respuesta);
//   // }

//   // const onSubmit = async (e) => {
//   //     e.preventDefault();
//   //     const data = {
//   //         nombre,
//   //         prompts,
//   //         respuesta,
          
//   //     }
//   //     const res = await registerArtifact(data)
//   //     console.log(data)
//   //     console.log(res)
//   //   };

//   return (
//     <div className="App">
//       <div className="outer">
//         <div>
//           <div>Prompt de entrada</div>
//           <div className="textarea">
//             <textarea
//               id="prompt"
//               name="prompt"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//             ></textarea>
//           </div>
//         </div>
//         <div>
//           <div>Salida</div>
//           <div className="textarea">
//             <textarea
//               value={result}
//               onChange={(e) => setResult(e.target.value)}
//             ></textarea>
//           </div>
//         </div>
//       </div>
//       <button onClick={() => callOpenAi()}>Generar Artefacto</button>
//       <Mermaid key={result ? result.length : 0} chart={result} />
//     </div>
//   );
// }

// function SettingsTab({
//   token,
//   setToken,
//   model,
//   setModel,
//   promptTemplate,
//   setPromptTemplate,
//   maxTokens,
//   setMaxTokens,
//   temperature,
//   setTemperature
// }) {
//   const handlePromptTemplateChange = (e) => {
//     setPromptTemplate(e.target.value);
//     localStorage.setItem("promptTemplate", e.target.value);
//   };

//   function extractIntFromString(str) {
//     const result = str.match(/\d+/);
//     if (result) {
//       return parseInt(result[0], 10);
//     } else {
//       return 0;
//     }
//   };
// console.log('funciono chamo .. ' + idProject)
//   function extractFloatFromString(str) {
//     str = str.replace(',', '.'); // Reemplazar coma con punto como separador decimal
//     const result = str.match(/^-?(\d+)?(\.\d*)?/); // Une dígitos opcionales antes y después del punto decimal
//     if (result) {
//       return result[0] === '' ? '0' : result[0]; // Devuelve '0' si la entrada es una cadena vacía
//     } else {
//       return '0';
//     }
//   }

//   const handleMaxTokensChange = (e) => {
//     let maxTokens = extractIntFromString(e.target.value);
//     setMaxTokens(maxTokens);
//     localStorage.setItem("maxTokens", maxTokens);
//   };

//   const handleTemperatureChange = (e) => {
//     let temperate = extractFloatFromString(e.target.value);
//     setTemperature(temperate);
//     localStorage.setItem("temperate", temperate);
//   };

//   return (
//     <div>
//       <div>OpenAI API_KEY</div>
//       <div>
//         <input
//           type="password"
//           id="token"
//           name="token"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="model">Motor GPT:</label>
//         <select
//           name="model"
//           id="model"
//           value={model}
//           onChange={(e) => setModel(e.target.value)}
//         >
//           <option value="gpt-4">gpt-4</option>
//           <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
//           <option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="maxTokens">Max de Tokens a usar:</label>
//         <input
//           type="text"
//           id="maxTokens"
//           name="maxTokens"
//           value={maxTokens}
//           onChange={handleMaxTokensChange}
//         />
//       </div>

//       <div>
//         <label htmlFor="temperature">Temperatura:</label>
//         <input
//           type="text"
//           id="temperature"
//           name="temperature"
//           value={temperature}
//           onChange={handleTemperatureChange}
//         />
//       </div>

//       <div>
//         <label htmlFor="promptTemplate">Prompt Template:</label>
//         <textarea
//           type="text"
//           id="promptTemplate"
//           name="promptTemplate"
//           value={promptTemplate}
//           onChange={handlePromptTemplateChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default function MapaImpacto({id,tema,api}) {
  
//   useEffect(() => {
//     idProject = id
//     apikey= api
//     temaproyecto = tema
//     // verProyecto()
//     setToken(apikey)
//   },[]);
//   useEffect(() => {
//     setPrompt(temaproyecto)
//   },[]);
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [activeTab, setActiveTab] = useState("Mindmapping");
//   const [token, setToken] = useState("");
//   const [model, setModel] = useState("gpt-3.5-turbo");
//   const [maxTokens, setMaxTokens] = useState(
//     localStorage.getItem("maxTokens") || 2000
//   );
//   let respuesta = result
//   let promptGlobal
//   if(prompt == '' ){
//     promptGlobal = temaproyecto
//   }else{
//     promptGlobal = prompt
//   } 
  
//   async function guardarMapa(){
//     let prompt = promptGlobal
//     let id = idProject
//     let nombre = 'brainstorming'
//     const data = {
//       id,
//       nombre,
//       prompt,
//       respuesta
//   }
//   const result = await registerArtifact(data)
//     console.log(result)
//     console.log(data.prompt)
//   }
//   const [temperature, setTemperature] = useState(
//     localStorage.getItem("temperature") || 0.7
//   );

//   const [promptTemplate, setPromptTemplate] = useState(
//     localStorage.getItem("promptTemplate") ||
//       `Cree un mapa mental de mermaid basado en las aportaciones del usuario como estos ejemplos:
// brainstorming mindmap
// mindmap
// \t\troot(("leisure activities weekend"))
// \t\t\t\t["spend time with friends"]
// \t\t\t\t::icon(fafa fa-users)
// \t\t\t\t\t\t("action activities")
// \t\t\t\t\t\t::icon(fafa fa-play)
// \t\t\t\t\t\t\t\t("dancing at night club")
// \t\t\t\t\t\t\t\t("going to a restaurant")
// \t\t\t\t\t\t\t\t("go to the theater")
// \t\t\t\t["spend time your self"]
// \t\t\t\t::icon(fa fa-fa-user)
// \t\t\t\t\t\t("meditation")
// \t\t\t\t\t\t::icon(fa fa-om)
// \t\t\t\t\t\t("\`take a sunbath ☀️\`")
// \t\t\t\t\t\t("reading a book")
// \t\t\t\t\t\t::icon(fa fa-book)
// text summary mindmap:
// mindmap
// \troot("Barack Obama")
// \t\t("Born August 4, 1961")
// \t\t::icon(fa fa-baby-carriage)
// \t\t("American Politician")
// \t\t\t::icon(fa fa-flag)
// \t\t\t\t("44th President of the United States")
// \t\t\t\t\t("2009 - 2017")
// \t\t("Democratic Party")
// \t\t\t::icon(fa fa-democrat)
// \t\t("First African-American President")
// cause and effects mindmap:
// mindmap
// \troot("Landlord sells apartment")
// \t\t::icon(fa fa-sell)
// \t\t("Renter must be notified of sale")
// \t\t::icon(fa fa-envelope)
// \t\t\t("Tenants may feel some uncertainty")
// \t\t\t::icon(fa fa-question-circle)
// \t\t("Notice periods must be observed")
// \t\t::icon(fa fa-calendar)
// \t\t\t("Landlord can submit notice of termination for personal use")
// \t\t\t::icon(fa fa-home)
// \t\t\t\t("Tenant has to look for a new apartment")
// \t\t\t\t::icon(fa fa-search)
// \t\t("New owner")
// \t\t::icon(fa fa-user)
// \t\t\t\t("New owner takes over existing rental agreement")
// \t\t\t\t::icon(fa fa-file-contract)
// \t\t\t\t\t\t("Tenant keeps previous apartment")
// \t\t\t\t\t\t::icon(fa fa-handshake)
// \t\t\t\t("New owner terminates newly concluded lease")
// \t\t\t\t::icon(fa fa-ban)
// \t\t\t\t\t\t("Tenant has to look for a new apartment")
// \t\t\t\t\t\t::icon(fa fa-search)
// Solo una raíz, use íconos gratuitos de FontAwesome, y seguir los tipos de nodos "[", "(". No es necesario utilizar "mermaid", "\`\`\`", or "graph TD". Responder sólo con código y sintaxis.`
//   );
  

//   // gpt-3.5-turbo
//   async function callOpenAi() {
//     setResult("");

//     console.log(temperature);
   
//     const url = "https://api.openai.com/v1/chat/completions";
//     const data = {
//       model: model,
//       messages: [
//         {
//           role: "system",
//           content: promptTemplate
//         },
//         {
//           role: "user",
//           content: prompt  
//         }
//       ],
//       stream: true,
//       max_tokens: maxTokens,
//       temperature: Number(temperature)
//     };
//     console.log(data)
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(data)
//     });

//     if (!response.ok) {
//       console.error("Error:", response.statusText);
//       return;
//     }
    
//     const reader = response.body.getReader();
//     const decoder = new TextDecoder("utf-8");
//     let text = "";

//     let resultString = ""; // Defina resultString aquí para recopilar todos los resultados

//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) {
//         break;
//       }

//       text += decoder.decode(value, { stream: true });
//       const lines = text.split("\n");
//       text = lines.pop();

//       for (const line of lines) {
//         const message = line.replace(/^data: /, "").trim();

//         if (message === "") {
//           continue;
//         }

//         if (message === "[DONE]") {
//           /*setResult((prev) => {
//             let result = processString(prev);
//             console.log(result);
//             return result;
//           });*/
//           return;
//         }

//         try {
//           const parsed = JSON.parse(message);
//           let result = parsed.choices[0].delta.content || "";

//           // Agregue cada línea a la cadena de resultados
//           if (
//             result !== "```" &&
//             result !== "```mermaid" &&
//             !result.includes("mermaid")
//           ) {
//             resultString += result;
//           }

//           //Si el resultado contiene una nueva línea, actualice el estado del resultado.
//           if (
//             result.includes("\n") &&
//             result !== "```" &&
//             result !== "```mermaid" &&
//             !result.includes("mermaid")
//           ) {
//             setResult(resultString);
//           }
//         } catch (error) {
//           console.error("No se pudo analizar JSON el mensaje de flujo", {
//             message,
//             error
//           });
//         }
//       }
//     }

//     console.log("before processString");
//     //Establezca el estado final después de que finalice el ciclo si aún no se ha configurado
//     if (
//       !resultString.includes("\n") &&
//       result !== "```" &&
//       result !== "```mermaid" &&
//       !result.includes("mermaid")
//     ) {
//       setResult(resultString);
//     }
    
//   }

//   return (
//     <div className="App">
//       <div className="tab-buttons">
//         <button className="tab-button" onClick={() => guardarMapa()}>guardar mapa</button>
//         <button
//           className="tab-button"
//           onClick={() => setActiveTab("Mindmapping")}
//         >
//           Artefacto
//         </button>
//         <button className="tab-button" onClick={() => setActiveTab("Settings")}>
//           Configuración
//         </button>
//       </div>
//       {activeTab === "Mindmapping" ? (
//         <MindmappingTab
//           prompt={prompt}
//           setPrompt={setPrompt}
//           result={result}
//           setResult={setResult}
//           callOpenAi={callOpenAi}
//           model={model}
//           promptTemplate={promptTemplate}
//         />
//       ) : (
//         <SettingsTab
//           token={token}
//           setToken={setToken}
//           model={model}
//           setModel={setModel}
//           promptTemplate={promptTemplate}
//           setPromptTemplate={setPromptTemplate}
//           maxTokens={maxTokens}
//           setMaxTokens={setMaxTokens}
//           temperature={temperature}
//           setTemperature={setTemperature}
//         />
//       )}
      
//     </div>
//   );
// }
