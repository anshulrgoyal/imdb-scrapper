function template(name, value) {
  return `
  ## ${name}
  ### output
   \`\`\`json
   ${value}
  \`\`\`
    `;
}

module.exports = { template };
