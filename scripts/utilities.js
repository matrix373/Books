import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js'
const supabaseUrl = 'https://kcbbjzpyyieletdzlfnc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjYmJqenB5eWllbGV0ZHpsZm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2OTI0NzgsImV4cCI6MjAyNjI2ODQ3OH0.3Vc02EuDdx7DSrmnqA7_4Fj48Bs-aTghLBp_jGxx_lI'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks()
{
    let { data: books, error } = await supabase
    .from('Books')
    .select('*');
    
    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
    }

}

getBooks();