export async function readFile() {
  try {
    const text = await Deno.readTextFile("./demo_files_rw/test.json")
    console.log(text)
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error("the file was not found")
    } else {
      throw error
    }
  }
}

readFile().then()