package com.yourid.arsample;


import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class TourListActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tour_list);

    }

    public void goTourDetails(View v){
        //Intent i = new Intent(this, TourOverviewActivity.class);
        //startActivity(i);
        AlertDialog alert = new AlertDialog.Builder(TourListActivity.this).create();
        alert.setTitle("Warning");
        alert.setMessage("This functionality has not been implemented yet");
        alert.setButton("OK", new DialogInterface.OnClickListener() {

            public void onClick(DialogInterface dialog, int which) {
            }
        });
        alert.show();
    }

    public void goTourMap(View v){
        Intent i=new Intent(this, MapTourActivity.class);
        String chosenTour = v.getTag().toString();
        i.putExtra("CHOSEN_TOUR",chosenTour);
        startActivity(i);
    }
}

