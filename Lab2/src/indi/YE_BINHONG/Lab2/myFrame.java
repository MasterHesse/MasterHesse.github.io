package indi.YE_BINHONG.Lab2;

import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class myFrame extends JFrame {
    public myFrame(){
        initialize();
    }

   //Global Variant X,Y,R and Points
    int R,X,Y;
    List<int[]> pointsList = new ArrayList<>();
    //Related coefficient
    int originPointX = 250;
    int originPointY = 200;
    int unitLength = 15;
    //If draw
    boolean coordinate = false;
    boolean shapes = false;
    boolean addPoint = false;
    //Panel Part
    JPanel myPanel; //creat a panel for drawing



    public void initialize(){

        setSize(500,800);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("Lab2,YE_BINHONG,22320107");

        Container container =getContentPane(); //Get main container
        container.setLayout(null);

        //Panel Set
        myPanel = new JPanel(){
            @Override
            protected void paintComponent(Graphics g){
                super.paintComponent(g);
                Graphics2D g2 = (Graphics2D) g;
                Stroke s = new BasicStroke(1.0F,BasicStroke.CAP_ROUND,BasicStroke.JOIN_ROUND);
                g2.setStroke(s);
                //Configure Coordinate
                if (coordinate){
                    g2.drawLine(100,200,400,200);
                    g2.drawLine(250,50,250,350);
                    g2.drawLine(400,200,395,205);
                    g2.drawLine(400,200,395,195);
                    g2.drawLine(250,50,245,55);
                    g2.drawLine(250,50,255,55);
                }
                //After entry R , configure the Shapes
                if (shapes){
                    int r = R * unitLength;
                    //First quadrant
                    int[] xFirst ={originPointX,originPointX,r+originPointX};
                    int[] yFirst ={-r/2+originPointY,originPointY,originPointY};
                    g2.setColor(Color.GREEN);
                    g2.fillPolygon(xFirst,yFirst,3);
                    g2.setColor(Color.blue);
                    g2.drawPolygon(xFirst,yFirst,3);
                    //Second quadrant
                    int xSecond = -r + originPointX;
                    int ySecond = -r + originPointY;
                    g2.setColor(Color.GREEN);
                    g2.fillArc(xSecond,ySecond,r,r,270,90);
                    g2.setColor(Color.blue);
                    g2.drawArc(xSecond,ySecond,r,r,270,90);
                    //Third quadrant
                    int xThird = originPointX - r/2;
                    int yThird = originPointY - r/2;
                    g2.setColor(Color.GREEN);
                    g2.fillArc(xThird,yThird,r,r,180,90);
                    g2.setColor(Color.blue);
                    g2.drawArc(xThird,yThird,r,r,180,90);
                    //Fourth quadrant
                    int[] xFourth = {originPointX,originPointX,r + originPointX};
                    int[] yFourth = {originPointY,originPointY + r,originPointY};
                    g2.setColor(Color.GREEN);
                    g2.fillPolygon(xFourth,yFourth,3);
                    g2.setColor(Color.blue);
                    g2.drawPolygon(xFourth,yFourth,3);
                }
                //Draw the points
                if(addPoint){
                    int radiusOfPoint = 10;
                    int r = R * unitLength;
                    int x = X*unitLength + originPointX ;
                    int y = -Y*unitLength + originPointY ;
                    int[] xy = {x,y};
                    pointsList.add(xy);
                    for (int[] point : pointsList) {
                        //First Quadrant
                        if (point[0] >= originPointX
                                && point[1] <= originPointY
                                && (point[0] - (originPointX)) <= ( point[1] - (originPointY-r/2 ))*2 ) {
                            g2.setColor(Color.blue);
                            g2.fillOval(point[0] - radiusOfPoint / 2, point[1] - radiusOfPoint / 2, radiusOfPoint, radiusOfPoint);
                        }
                        //Second Quadrant
                        else if (point[0] <= originPointX
                                && point[0] >= originPointX - r / 2
                                && point[1] <= originPointY
                                && point[1] >= originPointY - r / 2
                                && (point[0] - (originPointX - r / 2)) * (point[0] - (originPointX - r / 2)) + (point[1] - (originPointY - r / 2)) * (point[1] - (originPointY - r / 2)) <= (r / 2) * (r / 2)) {
                            g2.setColor(Color.blue);
                            g2.fillOval(point[0] - radiusOfPoint / 2, point[1] - radiusOfPoint / 2, radiusOfPoint, radiusOfPoint);
                        }
                        //Third Quadrant
                        else if (point[0] <= originPointX
                                && point[1] >= originPointY
                                && ((point[0] - originPointX) * (point[0] - originPointX)) + ((point[1] - originPointY) * (point[1] - originPointY)) <= (r / 2) * (r / 2)) {
                            g2.setColor(Color.blue);
                            g2.fillOval(point[0] - radiusOfPoint / 2, point[1] - radiusOfPoint / 2, radiusOfPoint, radiusOfPoint);
                        }
                        //Fourth Quadrant
                        else if (point[0] >= originPointX
                                && point[1] >= originPointY
                                && (point[0] - (originPointX + r)) <= -(point[1] - originPointY)) {
                            g2.setColor(Color.blue);
                            g2.fillOval(point[0] - radiusOfPoint / 2, point[1] - radiusOfPoint / 2, radiusOfPoint, radiusOfPoint);
                        } else {
                            g2.setColor(Color.orange);
                            g2.fillOval(point[0] - radiusOfPoint / 2, point[1] - radiusOfPoint / 2, radiusOfPoint, radiusOfPoint);
                        }
                        g2.setColor(Color.black);
                        g2.drawOval(point[0] - radiusOfPoint / 2, point[1] - radiusOfPoint / 2, radiusOfPoint, radiusOfPoint);
                    }
                }
            }
        };
        //First Configure
        myPanel.setBounds(0,0,500,400);
        coordinate = true;
        myPanel.repaint();
        container.add(myPanel);

        //X from JList
        Integer[] XContent = {10,7,4,1,0,-1,-4,-7,-10};
        JList<Integer> xList = new JList<>(XContent);
        xList.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        xList.addListSelectionListener(e -> {
            if (!e.getValueIsAdjusting()){
                X = xList.getSelectedValue();
            }
        });

        JScrollPane xSP = new JScrollPane(xList);
        xSP.setBounds(100,400,50,100);
        container.add(xSP);

        JLabel xEquals = new JLabel("X =");
        xEquals.setBounds(50,400,50,50);
        container.add(xEquals);

        //My variant is 4,1,2  ,so it should be X from JList,Y from JButton , R from JCheckBox
        //Y from JButtons
        int heightOfButton = 50;
        int widthOfButton = 55;
        JLabel yEquals = new JLabel("Y = ");
        yEquals.setBounds(175,400,50,50);
        container.add(yEquals);
        JButton[] yButton = new JButton[7];             //Button Arrays
        for (int i = 0; i < yButton.length; i++) {          //add button into container
            int temp = 10 - i*3;
            yButton[i] = new JButton();
            yButton[i].setText(String.valueOf(temp));
            yButton[i].setBounds(200,400+i*heightOfButton,widthOfButton,heightOfButton);
            yButton[i].addActionListener(e -> Y = temp);
            container.add(yButton[i]);
        }

        //R from JCheckBox
        JLabel rEquals = new JLabel("R =");
        rEquals.setBounds(300,400,50,50);
        container.add(rEquals);
        JCheckBox[] rCheckBox = new JCheckBox[10];
        ButtonGroup rCBGroup =new ButtonGroup();

        int heigthOfRCB = 25;
        int widthOfRCB = 50;

        for (int i = 0; i < rCheckBox.length; i++) {
            int temp = i + 1;
            rCheckBox[i] = new JCheckBox();
            rCheckBox[i].setText(String.valueOf(temp));
            rCheckBox[i].setBounds(325,400+i*25,widthOfRCB,heigthOfRCB);
            rCheckBox[i].addActionListener(e -> R = temp);
            rCBGroup.add(rCheckBox[i]);
            container.add(rCheckBox[i]);
        }
        JButton configure = new JButton("Configure");
        configure.setBounds(300,650,100,30);
        container.add(configure);
        configure.addActionListener(e -> {
            for (JCheckBox checkBox : rCheckBox) {
                checkBox.setVisible(false);
            }
            rEquals.setVisible(false);
            configure.setVisible(false);
            shapes = true;
            myPanel.repaint();
        });

        //CheckButton
        JButton check = new JButton();
        check.setBounds(375,400,100,50);
        check.setText("Check!");
        check.addActionListener(e -> {
            addPoint = true;
            myPanel.repaint();
        });
        container.add(check);



    }
}

