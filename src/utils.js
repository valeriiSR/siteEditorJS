export function row(data, styles){
  return `<div style="${styles}" class="row">${data}</div>`
}

export function col(data){
  return `<div class="col-sm">${data}</div>`
}

export function css(styles = {}){
  if( typeof styles === 'string') return styles;

  const formatString = key => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(formatString).join('; ');
}

export function block(type){
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="content" placeholder="value">
      </div>
      <div class="form-group">
      <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <hr />
  `
};