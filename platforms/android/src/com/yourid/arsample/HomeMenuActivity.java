package com.yourid.arsample;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class HomeMenuActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_menu);
        //   ImageButton btnNewTour = (ImageButton) findViewById(R.id.imageButton10);

    }

    public void goNewTour(View v) {
        Intent i = new Intent(this, TourListActivity.class);
        startActivity(i);
    }

    public void goFavourites(View v) {
        //Intent i = new Intent(this, FavouritesActivity.class);
        //startActivity(i);
        AlertDialog alert = new AlertDialog.Builder(HomeMenuActivity.this).create();
        alert.setTitle("Warning");
        alert.setMessage("This functionality has not been implemented yet");
        alert.setButton("OK", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
            }
        });
        alert.show();
    }
}