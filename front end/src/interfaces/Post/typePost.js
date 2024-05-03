/**
 * @typedef {Object} Author
 * @property {string} name - Nome do autor.
 * @property {string} imageUrl - URL da imagem do autor.
 * @property {string} job - Ocupação ou profissão do autor.
 * @property {string} id - Identificador único do autor.
 */

/**
 * @typedef {Object} Comment
 * @property {string} name - Nome do autor do comentário.
 * @property {string} comment - Conteúdo do comentário.
 */

/**
 * @typedef {Object} Post
 * @property {string} id - Identificador único para a postagem.
 * @property {Author} author - Informações sobre o autor da postagem.
 * @property {string} imageUrl - URL da imagem associada à postagem.
 * @property {string} content - Conteúdo da postagem.
 * @property {number} likes - Número de curtidas que a postagem recebeu.
 * @property {Comment[]} comments - Array de objetos representando os comentários na postagem.
 */
