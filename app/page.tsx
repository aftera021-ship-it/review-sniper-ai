const handleGenerate = async () => {
    if (!url) return;
    setLoading(true);
    setReview(''); // مسح الـ Review القديمة

    try {
      const res = await fetch('/api/generate-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        // هـنـا غـادي يـطـلـع لـيـك الـمـشـكـل بـالـضـبـط (مثلا 500 أو 404)
        setReview(`Error (${res.status}): ${data.error || 'Unknown error'}`);
      } else {
        setReview(data.review);
      }
    } catch (err) {
      setReview("Network Error: Make sure your API route exists.");
    }
    setLoading(false);
  };