<div role="main" id="main">
<p>

Creating a TODO list can be considered just a little bit further from "Hello World", the "standard" example people use when
learning a new language. In this example we'll build a very basic TODO application using some HTML5 features and JavaScript.
</p><p>

</p><p>

The very first thing we need is to create an HTML page. We could get by with just the following 3 lines, as those are the important lines,
but I thought adding a few extra lines of HTML would make it more "correct".
</p><p>

The 3 important lines are the following:
</p><p>

</p><pre class="linenums">&lt;input id="task"&gt;&lt;button id="add"&gt;Add&lt;/button&gt;
&lt;div id="todos"&gt;&lt;/div&gt;
&lt;script src="todo.js"&gt;&lt;/script&gt;
</pre>
<p>

At first we have an <span class="inline_code">input</span> element where we'll be able to enter text and it has a button that we'll be able to click.
</p><p>

In the second row we have an empty <span class="inline_code">div</span> element. We are going to display the current list in that element.
</p><p>

Finally we load an external JavaScript file called <span class="inline_code">todo.js</span>
</p><p>

The reason we load the JavaScript file at the end is that we wanted to make sure the other elements are already in the browser by
the time the JavaScript file is loaded and by the time it starts to run.
</p><p>

The full version can be seen here, and you can even try it by clicking on the link below.
</p><p>

<b>examples/js/todo.html</b><br></p><pre class="prettyprint linenums language-html prettyprinted"><ol class="linenums"><li class="L0"><span class="dec">&lt;!DOCTYPE html&gt;</span></li><li class="L1"><span class="tag">&lt;html</span><span class="pln"> </span><span class="atn">lang</span><span class="pun">=</span><span class="atv">"en"</span><span class="tag">&gt;</span></li><li class="L2"><span class="tag">&lt;head&gt;</span></li><li class="L3"><span class="pln">  </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">charset</span><span class="pun">=</span><span class="atv">"utf-8"</span><span class="tag">&gt;</span></li><li class="L4"><span class="pln">  </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"viewport"</span><span class="pln"> </span><span class="atn">content</span><span class="pun">=</span><span class="atv">"width=device-width, initial-scale=1.0, user-scalable=yes"</span><span class="tag">&gt;</span></li><li class="L5"><span class="tag">&lt;/head&gt;</span></li><li class="L6"><span class="tag">&lt;body&gt;</span></li><li class="L7"><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"task"</span><span class="tag">&gt;&lt;button</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"add"</span><span class="tag">&gt;</span><span class="pln">Add</span><span class="tag">&lt;/button&gt;</span></li><li class="L8"><span class="tag">&lt;hr&gt;</span></li><li class="L9"><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"todos"</span><span class="tag">&gt;&lt;/div&gt;</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"todo.js"</span><span class="tag">&gt;&lt;/script&gt;</span></li><li class="L2"><span class="tag">&lt;/body&gt;</span></li><li class="L3"><span class="tag">&lt;/html&gt;</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="pln">&nbsp;</span></li></ol></pre>
<a href="/try/examples/js/todo.html" target="_new">Try!</a><p>

In the JavaScript code we have 4 function, and after the declaration of those 3 function we have the following code:
</p><p>

</p><pre class="linenums">document.getElementById('add').addEventListener('click', add);
show();
</pre>
<p>

The first line locates the HTML element that has the id "add" using the <a href="http://code-maven.com/javascript-hello-world-change-the-dom">getElementById</a>
method. On the returned object we call the <a href="http://code-maven.com/handling-events-in-javascript">addEventListener</a> method and assign the
<span class="inline_code">add</span> function to the <span class="inline_code">click</span> event. This code will make sure then whenever the user clicks on the "Add" button, the <span class="inline_code">add</span> function
will be called.
</p><p>

Finally we run the <span class="inline_code">show</span> function.
</p><p>

The 4 function we have in our code are the following:
</p><p>

<span class="inline_code">show</span> will display the current list of TODO items.
</p><p>

<span class="inline_code">add</span> will take the text from the <span class="inline_code">input</span> box and save it in our "database".
</p><p>

<span class="inline_code">remove</span> will remove the selected item from the list of TODO items in our "database".
</p><p>

<span class="inline_code">get_todos</span> is the function that will retrieve the list of TODO items from our "database".
</p><p>

</p><p>

</p><h2>The "database"</h2>
<p>

I put the word in quotes as it is not really a database in the same way most people consider databases,
but then any place we can persistently store data could be called a "database".
</p><p>

Specifically we are going to use the <a href="http://code-maven.com/on-load-counter-with-javascript-and-local-storage">localStorage</a>
facility. It is a key-value pair database in the browser. We can store any string in it and that data will be available to us
when we return to the same page later. We just have to remember, the information stored in <span class="inline_code">localStorage</span> is not going to
be sent to the server and it won't be available on the same page if we visit it from another computer, or even from the same computer,
but a different browser.
</p><p>

For our TODO list we are going to use a single key in the <span class="inline_code">localStorage</span> and the value will be the stringified version of the list of TODO items we have.
</p><p>

</p><p>

</p><h2>Fetching from the database: get_todos</h2>
<p>

As this function used by all the other functions, let's see the <span class="inline_code">get_todos</span> function first. It does not get any parameter.
It just fetches the content of the <span class="inline_code">todo</span> key of the <span class="inline_code">localStorage</span> using the <span class="inline_code">getItem</span> method.
If this is the first time ever the function is called, the specific localStorage entry will be empty and the <span class="inline_code">localStorage.getItem</span>
call will return <span class="inline_code">null</span>. In that case we return the newly created empty <span class="inline_code">Array</span>.
</p><p>

If the returned value is not <span class="inline_code">null</span> then it must be the stringified data we stored earlier. We use <span class="inline_code">JSON.parse</span> to
convert the JSON string back to JavaScript data and return that.
</p><p>

</p><pre class="linenums">function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
</pre>
<p>

</p><h2>Adding a new TODO entry</h2>
<p>

The second function we might want to take a look at is the one called <span class="inline_code">add</span> which is called when the user has
clicked on the <span class="inline_code">All</span> button. At first, using <span class="inline_code">getElementById</span> it locates the HTML element with the id <span class="inline_code">task</span> which is the
<span class="inline_code">input</span> box and then it retrieves the <span class="inline_code">value</span> the user has typed in.
</p><p>

Then, calling <span class="inline_code">get_todos</span> we retrieve the already existing list of TODO items from the "database". As explained above,
at the first time this function will return an empty <span class="inline_code">Array</span>.
</p><p>

We append the new task to the <span class="inline_code">Array</span> using the <span class="inline_code">push</span> method and then save the new list of TODO items
in the "database". For this we first stringify the <span class="inline_code">Array</span> using the <span class="inline_code">JSON.stringify</span> method and then
we store the returned string using the <span class="inline_code">localStorage.setItem</span> method.
</p><p>

In the next step we call the <span class="inline_code">show()</span> function that will update the list of TODOs displayed on the web page.
</p><p>

Finally we <span class="inline_code">return false;</span> to avoid any further actions generated by the 'click' event.
</p><p>

</p><pre class="linenums">function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
</pre>
<p>

</p><h2>show the TODO list</h2>
<p>

The <span class="inline_code">show</span> function will display the current TODO list stored in the "database".
First thing it calls <span class="inline_code">get_todos</span> to get the (possibly empty) <span class="inline_code">Array</span> of
TODO items.
</p><p>

Then we manually create an HTML snippet in the, otherwise arbitrarily named <span class="inline_code">html</span> variable.
This is a <span class="inline_code">ul</span> element (and unordered list), with a <span class="inline_code">li</span> (list item) for each TODO entry.
In addition to the content of the <span class="inline_code">todos</span> array we also add a button to each list item.
Each button belongs to a class called 'remove' and each button has an id containing the index of the
todo item in the list retrieved from the "database". We'll use these buttons to allow the user to remove
an item from the list.
</p><p>

The call <span class="inline_code">document.getElementById('todos').innerHTML = html;</span> insert the newly generated HTML
snippet in the original document loaded from the server. It actually replaces the content of the
element with the id "todos". This means in subsequent calls it will just show the new list
regardless of what was there earlier.
</p><p>

In the next 4 lines we use the <span class="inline_code">getElementsByClassName</span> method to fetch all the buttons
that are in the 'remove' class. These are the buttons we have just added to each todo item.
To each button we assign a <span class="inline_code">event listener</span> that will be called if the user clicks on
either of those buttons. The call to <span class="inline_code">addEventListener</span> connects the 'click' event to the
<span class="inline_code">remove</span> function.
</p><p>

</p><pre class="linenums">function show() {
    var todos = get_todos();

    var html = '&lt;ul&gt;';
    for(var i=0; i&lt;todos.length; i++) {
        html += '&lt;li&gt;' + todos[i] + '&lt;button class="remove" id="' + i  + '"&gt;x&lt;/button&gt;&lt;/li&gt;';
    };
    html += '&lt;/ul&gt;';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i &lt; buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
</pre>
<p>

</p><h2>remove a TODO item</h2>
<p>

Finally we arrive to the <span class="inline_code">remove</span> function that will be called when the user clicks on any of
the remove buttons. (The remove buttons have an X on them.)
</p><p>

<span class="inline_code">this</span> represents the current DOM-object which is the remove-button the user just clicked.
We retrieve the value of its <span class="inline_code">id</span> attribute using the <span class="inline_code">getAttribute</span> method. This is
the index of the specific TODO item among the TODO items in the "database".
</p><p>

After retrieving the current list of TODO items, we use the <span class="inline_code">splice</span> method to remove
a specific element from the JavaScript array, and then we store the new list back the database.
</p><p>

Then, just as in the <span class="inline_code">add</span> function we call the <span class="inline_code">show</span> function to update the list in the
browser as well and we <span class="inline_code">return false;</span> to stop the propagation of the 'click' event.
</p><p>

</p><pre class="linenums">function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
</pre>
<p>

</p><h2>Full JavaScript code for TODO list</h2>
<p>

That's it all the code for the JavaScript based TODO list.
</p><p>

<b>examples/js/todo.js</b><br></p><pre class="prettyprint linenums language-javascript prettyprinted"><ol class="linenums"><li class="L0"><span class="kwd">function</span><span class="pln"> get_todos</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> todos </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> todos_str </span><span class="pun">=</span><span class="pln"> localStorage</span><span class="pun">.</span><span class="pln">getItem</span><span class="pun">(</span><span class="str">'todo'</span><span class="pun">);</span></li><li class="L3"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">todos_str </span><span class="pun">!==</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L4"><span class="pln">        todos </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">todos_str</span><span class="pun">);</span><span class="pln"> </span></li><li class="L5"><span class="pln">    </span><span class="pun">}</span></li><li class="L6"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> todos</span><span class="pun">;</span></li><li class="L7"><span class="pun">}</span></li><li class="L8"><span class="pln">&nbsp;</span></li><li class="L9"><span class="kwd">function</span><span class="pln"> add</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L0"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> task </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'task'</span><span class="pun">).</span><span class="pln">value</span><span class="pun">;</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> todos </span><span class="pun">=</span><span class="pln"> get_todos</span><span class="pun">();</span></li><li class="L3"><span class="pln">    todos</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">task</span><span class="pun">);</span></li><li class="L4"><span class="pln">    localStorage</span><span class="pun">.</span><span class="pln">setItem</span><span class="pun">(</span><span class="str">'todo'</span><span class="pun">,</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">todos</span><span class="pun">));</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="pln">    show</span><span class="pun">();</span></li><li class="L7"><span class="pln">&nbsp;</span></li><li class="L8"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></li><li class="L9"><span class="pun">}</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="kwd">function</span><span class="pln"> remove</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> id </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getAttribute</span><span class="pun">(</span><span class="str">'id'</span><span class="pun">);</span></li><li class="L3"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> todos </span><span class="pun">=</span><span class="pln"> get_todos</span><span class="pun">();</span></li><li class="L4"><span class="pln">    todos</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="pln">id</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span></li><li class="L5"><span class="pln">    localStorage</span><span class="pun">.</span><span class="pln">setItem</span><span class="pun">(</span><span class="str">'todo'</span><span class="pun">,</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">todos</span><span class="pun">));</span></li><li class="L6"><span class="pln">&nbsp;</span></li><li class="L7"><span class="pln">    show</span><span class="pun">();</span></li><li class="L8"><span class="pln">&nbsp;</span></li><li class="L9"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></li><li class="L0"><span class="pun">}</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="kwd">function</span><span class="pln"> show</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> todos </span><span class="pun">=</span><span class="pln"> get_todos</span><span class="pun">();</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> html </span><span class="pun">=</span><span class="pln"> </span><span class="str">'&lt;ul&gt;'</span><span class="pun">;</span></li><li class="L6"><span class="pln">    </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln">todos</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L7"><span class="pln">        html </span><span class="pun">+=</span><span class="pln"> </span><span class="str">'&lt;li&gt;'</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> todos</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">'&lt;button class="remove" id="'</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> i  </span><span class="pun">+</span><span class="pln"> </span><span class="str">'"&gt;x&lt;/button&gt;&lt;/li&gt;'</span><span class="pun">;</span></li><li class="L8"><span class="pln">    </span><span class="pun">};</span></li><li class="L9"><span class="pln">    html </span><span class="pun">+=</span><span class="pln"> </span><span class="str">'&lt;/ul&gt;'</span><span class="pun">;</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pln">    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'todos'</span><span class="pun">).</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> html</span><span class="pun">;</span></li><li class="L2"><span class="pln">&nbsp;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> buttons </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementsByClassName</span><span class="pun">(</span><span class="str">'remove'</span><span class="pun">);</span></li><li class="L4"><span class="pln">    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> buttons</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L5"><span class="pln">        buttons</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> remove</span><span class="pun">);</span></li><li class="L6"><span class="pln">    </span><span class="pun">};</span></li><li class="L7"><span class="pun">}</span></li><li class="L8"><span class="pln">&nbsp;</span></li><li class="L9"><span class="pln">document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'add'</span><span class="pun">).</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> add</span><span class="pun">);</span></li><li class="L0"><span class="pln">show</span><span class="pun">();</span></li></ol></pre>
<p>


</p></div>
