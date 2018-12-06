function template(name, value) {
  return `
  ## ${name}
  \`\`\`javascript
  ${name}.then(val=>console.log(val))
  \`\`\`
  ### output
   \`\`\`json
   ${value}
  \`\`\`
    `;
}

function imageTemplate(url, quality) {
  return `
## ${quality}
![quality-${quality}](${url})
`;
}
function imageTemplateGroup(array = []) {
  return `
  ## changeQuality(n)
  ### n can be 0,1,2,3,4,5
  ${array.join("\n")}`;
}
module.exports = { template, imageTemplate, imageTemplateGroup };
