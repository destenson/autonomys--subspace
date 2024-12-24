(function() {
    var type_impls = Object.fromEntries([["pallet_domains",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    DomainHeader: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Header,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_domains::SingletonReceiptOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    DomainHeader: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Header,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_domains::SingletonReceiptOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-Decode-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; Decode for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    DomainHeader: Header,\n    SingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/nightly/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_domains::SingletonReceiptOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-Encode-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; Encode for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    DomainHeader: Header,\n    SingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>,\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_domains::SingletonReceiptOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    DomainHeader: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Header,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(\n    &amp;self,\n    other: &amp;SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_domains::SingletonReceiptOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    Number: Encode,\n    Hash: Encode,\n    DomainHeader: Header,\n    Balance: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.domain_id\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">domain_id</a>(&amp;self) -&gt; DomainId</h4></section></summary><div class=\"docblock\"><p>Returns the <code>domain_id</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operator_id\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">operator_id</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Return the <code>operator_id</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.slot_number\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">slot_number</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Return the <code>slot_number</code> of the <code>proof_of_election</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.receipt\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">receipt</a>(\n    &amp;self,\n) -&gt; &amp;ExecutionReceipt&lt;Number, Hash, &lt;DomainHeader as Header&gt;::Number, &lt;DomainHeader as Header&gt;::Hash, Balance&gt;</h4></section></summary><div class=\"docblock\"><p>Return the receipt</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_receipt\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_receipt</a>(\n    self,\n) -&gt; ExecutionReceipt&lt;Number, Hash, &lt;DomainHeader as Header&gt;::Number, &lt;DomainHeader as Header&gt;::Hash, Balance&gt;</h4></section></summary><div class=\"docblock\"><p>Consume this <code>SealedSingletonReceipt</code> and return the receipt</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pre_hash\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">pre_hash</a>(&amp;self) -&gt; &lt;DomainHeader as Header&gt;::Hash</h4></section></summary><div class=\"docblock\"><p>Returns the hash of <code>SingletonReceipt</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a></h4></section></summary><div class=\"docblock\"><p>Return the encode size of <code>SealedSingletonReceipt</code></p>\n</div></details></div></details>",0,"pallet_domains::SingletonReceiptOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; TypeInfo for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    DomainHeader: Header + TypeInfo + 'static,\n    SingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;: TypeInfo + 'static,\n    Number: TypeInfo + 'static,\n    Hash: TypeInfo + 'static,\n    Balance: TypeInfo + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_domains::SingletonReceiptOf"],["<section id=\"impl-EncodeLike-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; EncodeLike for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    DomainHeader: Header,\n    SingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;: Encode,</div></h3></section>","EncodeLike","pallet_domains::SingletonReceiptOf"],["<section id=\"impl-Eq-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-Eq-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    DomainHeader: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Header,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","pallet_domains::SingletonReceiptOf"],["<section id=\"impl-StructuralPartialEq-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SealedSingletonReceipt%3CNumber,+Hash,+DomainHeader,+Balance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash, DomainHeader, Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for SealedSingletonReceipt&lt;Number, Hash, DomainHeader, Balance&gt;<div class=\"where\">where\n    DomainHeader: Header,</div></h3></section>","StructuralPartialEq","pallet_domains::SingletonReceiptOf"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[23024]}