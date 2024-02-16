//Question-14--JavaScript Program to Show Exception Handling (with Use of try, catch, and throw)


try {
    // Code that may throw an exception
    throw new Error('This is an example error.');
} catch (error) {
    // Handle the exception
    console.error(`Caught an error: ${error.message}`);
}
