require 'fileutils'

DIRS = [ 'Adobe Illustrator CC 2018', 'Adobe Illustrator CC 2019' ]

task :install do
  DIRS.each do |dir|
    install_dir =  "/Applications/#{dir}/Presets.localized/en_US/Scripts"

    puts "\n----\nChecking for existence of #{install_dir}"
    if Dir.exist?( install_dir )
      puts "Found it. Installing"
      cp "ai2html.jsx", "#{install_dir}/ai2html.jsx"
      # cp "ai2html.js", "#{install_dir}/ai2html_v2.jsx"
      cp "utilities/aifontname.js", "#{install_dir}/aifontname.jsx"
      cp "utilities/export-fallback-images.js", "#{install_dir}/export-fallback-images.jsx"
    else
      puts "Does not exist."
    end
  end
end
