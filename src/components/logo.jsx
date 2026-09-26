function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ff4b69]">
        <div className="h-4 w-4 rounded-sm bg-[#ffe500]" />
      </div>

      <span className="text-xl font-bold text-white">
        Play<span className="text-[#ffe500]">Code</span>
      </span>
    </div>
  );
}

export default Logo;