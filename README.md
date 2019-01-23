# ai2html for Mizzou

This is a fork of the open-sourced Axios ai2html instance found [here](https://github.com/axioscode/ai2html)

And that is a fork of the original NYTimes instance found [here](http://ai2html.org)

## What's unique about it

This `slug.ai` template is exactly the same as the one we use at Axios with a few changes. It uses the same Google web font used on the Missourian site ([Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro)). The Missourian graphics template uses Franklin Gothic. They're fairly similar.

I've added the Missouri graphics color palette and style references to the `slug.ai` file as well.

__Note:__ There are a lot of files in this directory. You really only need to worry about two of them: `ai2html_como_v1.js` and the `/yyyy-mm-dd` directory.

### How to install ai2html

1. Move the `ai2html_como_v1.js` file into the Illustrator folder where scripts are located.
For example, on Mac OS X running Adobe Illustrator CC 2017, the path would be:
```Applications⁩/Adobe Illustrator CC 2017⁩/Presets⁩/en_US⁩/Scripts/ai2html_como_v1.js```

2. Close and restart Illustrator.

### How to use ai2html

1. Start a new project by duplicating the project template folder `/yyyy-mm-dd-slug`.

2. Change the name of the directory to your project slug. For example: `2019-01-21-traffic-accidents`

3. Change the name of the `slug.ai` file to the slug name as well. For example: `2019-01-21-traffic-accidents.ai`

4. Create your Illustrator artwork in the ai file. I like to start with the "Mobile Large" artboard, because that's the one our audience is most likely to see. If it works on people's phones, it will be easy to size up for a desktop view as well.

5. When you're done creating the chart at that size, cut and paste it into each of the artboards and adjust the layout and labeling as necessary. The goal is to make sure the chart looks good at all sizes.

6. When that's all set, run the script by choosing: `File > Scripts > ai2html_como_v1` in Illustrator. Then, go to the folder containing your Illustrator file. Inside will be a folder called `2019-01-21-traffic-accidents` (or whatever your slug name is).

7. Open the html file (ex: `2019-01-21-traffic-accidents.html`) in your browser to preview your output.
