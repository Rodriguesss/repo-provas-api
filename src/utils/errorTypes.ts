export function unprocessableEntity(message: string) {
  return { type: 'unprocessable_entity', message };
}

export function badRequest(message: string) {
  return { type: 'bad_request', message };
}